import { useEffect, useRef, useState } from 'react';
import { StyledImageLazy } from './ImageLazy.styles';
import { ImageLazyProps } from './ImageLazy.types';

// export const defaultProps: DefaultProps = {};

const ImageLazy: React.FC<ImageLazyProps> = ({
  placeholderSrc,
  source,
  alt,
}: ImageLazyProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState('');
  const placeholderRef = useRef<HTMLImageElement>(null!);

  useEffect(() => {
    // Initiating Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      // Set actual image source && unobserve when intersecting
      if (entries[0].isIntersecting) {
        setView(source);
        observer.unobserve(placeholderRef.current);
      }
    });

    // observe for an placeholder image
    if (placeholderRef && placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }
  }, [source]);
  return (
    <>
      {isLoading && (
        <StyledImageLazy src={placeholderSrc} alt="" ref={placeholderRef} />
      )}
      <StyledImageLazy
        src={view} // Gets src only when placeholder intersecting
        style={isLoading ? { display: 'none' } : { display: 'block' }}
        alt={alt}
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};

export default ImageLazy;
