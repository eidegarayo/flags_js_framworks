export interface StyledMapProps {}

interface OptionalMapProps {}

export interface DefaultProps extends StyledMapProps, OptionalMapProps {}

export interface MapProps extends Partial<DefaultProps> {}
