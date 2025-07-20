import { getImageSrcSet } from '@/utils';
import { Chip } from '@mui/material';
import { Destination } from './TendingDestinationCard.type';
import {
  CardContainer,
  CityName,
  Content,
  Description,
  Thumbnail,
  TitleRow,
} from './TrendingDestinationCard.style';

const TrendingDestinationCard = ({ destination }: { destination: Destination }) => {
  const { cityName, countryName, description, thumbnailUrl } = destination;
  return (
    <CardContainer>
      <Thumbnail
        {...getImageSrcSet(thumbnailUrl, 320)}
        alt={`${cityName}, ${countryName}`}
        loading="lazy"
      />
      <Content>
        <TitleRow>
          <CityName>{cityName}</CityName>
          <Chip label={countryName} color="primary" size="small" />
        </TitleRow>
        <Description>{description}</Description>
      </Content>
    </CardContainer>
  );
};

export default TrendingDestinationCard;
