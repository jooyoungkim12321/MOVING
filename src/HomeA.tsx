import { useQuery } from "react-query";
import styled from "styled-components";
import { ITrendingWekk, getTrendingWeek } from "./api";

const Wrapper = styled.div``;

const Banner = styled.div``;

const Info = styled.div``;

const Title = styled.h2``;

const Overview = styled.span``;

const CoverImage = styled.div``;

const BoxList = styled.div``;

const Box = styled.div``;

const BoxNumber = styled.div``;

function HomeA() {
  const { data, isLoading } = useQuery<ITrendingWekk>(
    ["all", "trendingweek"],
    getTrendingWeek
  );
  console.log(data);
  return (
    <Wrapper>
      <Banner>
        <Info>
          <CoverImage />
          <Title></Title>
          <Overview></Overview>
        </Info>
      </Banner>
      <BoxList>
        <Box>
          <BoxNumber></BoxNumber>
        </Box>
      </BoxList>
    </Wrapper>
  );
}

export default HomeA;
