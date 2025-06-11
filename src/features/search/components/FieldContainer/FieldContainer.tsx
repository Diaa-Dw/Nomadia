import { StyledFieldContainer } from './FieldContainer.style';
import { FieldContainerProps } from './FieldContainer.type';

const FieldContainer = ({ children, icon, pointer, ...rest }: FieldContainerProps) => {
  return (
    <StyledFieldContainer pointer={pointer} {...rest}>
      {icon}
      {children}
    </StyledFieldContainer>
  );
};

export default FieldContainer;
