import styled from 'styled-components';

interface Props {
    image: string;
    name: string;
    color: string;
    date: string;
    imageKey?: string;
    [key: string]: any; // add index signature to allow any string key
}

function ZodiacSignCard({ name, image, color, date }: Props) {
  return (
      <ZodiacSignColumn color={color}>
        <ZodiacCircle color={color}>
          <Img src={image} alt={name} />
        </ZodiacCircle>
        <Name color={color}>{name}</Name>
        <DateText>{date}</DateText>
      </ZodiacSignColumn>
  );
}
  
  export default ZodiacSignCard;

  interface Props {
    color: string;
  }

const ZodiacSignColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.4rem;
  width: 10rem;
  background: #FFFFFF;
  padding: 1rem;
  -webkit-box-shadow: 0 0.625rem 0.375rem -0.375rem #777;
  -moz-box-shadow: 0 0.625rem 0.375 -0.375rem #777;
  box-shadow: 0 0.625rem 0.375 -0.375rem #777;
`;

const ZodiacCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.color};
  width: 6rem;
  height: 6rem;
  border-radius: 10rem;
`;

const Img = styled.img`
  width: 4rem;
`;

const Name = styled.h2`
  font-size: 1rem;
  font-weight: 400;
  font-family: 'Tenor Sans', sans-serif;
  text-transform: uppercase;
`;

const DateText = styled.div`
  font-family: 'Tenor Sans', sans-serif;
  font-size: 0.9rem;
`;