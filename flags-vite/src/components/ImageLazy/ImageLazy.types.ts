export interface StyledImageLazyProps {}

interface OptionalImageLazyProps {}

export interface DefaultProps
  extends StyledImageLazyProps,
    OptionalImageLazyProps {}

export interface ImageLazyProps extends Partial<DefaultProps> {
  placeholderSrc: string;
  source: string;
  alt: string;
}
