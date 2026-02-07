import { useState, useEffect } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useTypingText(
  phrases: string[],
  typingSpeed: number = 100,
  deletingSpeed: number = 50,
  pauseDuration: number = 2000
): string {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(phrases[0]);
      return;
    }

    const currentPhrase = phrases[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentPhrase.length) {
            setText(currentPhrase.slice(0, text.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          if (text.length > 0) {
            setText(currentPhrase.slice(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration, prefersReducedMotion]);

  return text;
}
