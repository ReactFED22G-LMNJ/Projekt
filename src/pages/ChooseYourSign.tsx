import { Link } from "react-router-dom";
import styled from "styled-components";
import HeaderChooseYourSign from "../components/HeaderChooseYourSign";
import ZodiacSignCard from "../components/ZodiacSignCard";
import { ZodiacSigns } from "../data/ZodiacSignsData";
  
function ChooseYourSign() {
  return (
    <div>
      <HeaderChooseYourSign />
      <ZodiacSignContainer>
        {ZodiacSigns.map((zodiacSign) => (
          <Link key={zodiacSign.name} to={`/dailyhoroscope/${zodiacSign.name.toLowerCase()}/today`}>
            <ZodiacSignCard
              image={zodiacSign.image}
              name={zodiacSign.name}
              color={zodiacSign.color}
              date={zodiacSign.date}
            />
          </Link>
        ))}
      </ZodiacSignContainer>
    </div>
  );
}

const ZodiacSignContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1280px;
`;

export default ChooseYourSign;
