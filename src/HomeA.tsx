import { useQuery } from "react-query";
import styled from "styled-components";
import {
  ITrendingDay,
  ITrendingWeek,
  getTrendingDay,
  getTrendingWeek,
  makeImagePath,
} from "./api";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ReactComponent as Left } from "./image/left.svg";
import { ReactComponent as Right } from "./image/right.svg";

const Wrapper = styled.div`
  position: relative;
  height: 200vh;
  width: 100vw;
`;

const Banner = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  height: 500px;
`;

const Row = styled.div`
  position: relative;
`;

const Slide = styled(motion.div)`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  gap: 10px;
`;

const CoverImage = styled.div<{ bgphoto: string }>`
  width: 800px;
  height: 500px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
`;

const Info = styled.div``;

const Title = styled.h2`
  font-size: 50px;
  font-weight: bold;
`;

const Overview = styled.span`
  width: 50%;
`;

const List = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  top: 100px;
  width: 100%;
  height: 300px;
`;

const BoxTitle = styled.h2`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.white};
`;

const Box = styled(motion.div)<{ bgphoto: string }>`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
`;

const BoxNumber = styled.div``;

const SlideBanner = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SliderLeft = styled(motion.div)``;

const SliderRight = styled(motion.div)``;

const SlideVariants = {
  init: { x: 0 },
  ani: { x: -640 * 20 },
};

const ListVariants = {
  init: {},
  ani: {},
  ex: {},
};

const ArrowVariants = {
  init: {},
  ani: {},
  ex: {},
};

const offset = 6;

function HomeA() {
  const { data: weekData, isLoading: isLoading1 } = useQuery<ITrendingWeek>(
    ["all", "trendingweek"],
    getTrendingWeek
  );

  const { data: dayData, isLoading: isLoading2 } = useQuery<ITrendingDay>(
    ["all", "trendingday"],
    getTrendingDay
  );

  return (
    <Wrapper>
      <Banner>
        <Row>
          <Slide
            variants={SlideVariants}
            initial="init"
            animate="ani"
            transition={{
              duration: 1000,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {weekData?.results.map((data) => (
              <CoverImage
                key={data.id}
                bgphoto={makeImagePath(data.backdrop_path, "original")}
              >
                <Info>
                  <Title>{data.title}</Title>
                  <Overview>{data.overview}</Overview>
                </Info>
              </CoverImage>
            ))}
          </Slide>
        </Row>
      </Banner>
      <Row style={{ top: "700px" }}>
        <BoxTitle>오늘의 MOVING Top 10</BoxTitle>
        <SlideBanner>
          <SliderLeft
            variants={ArrowVariants}
            initial="init"
            animate="ani"
            exit="ex"
          >
            <Left />
          </SliderLeft>
          <SliderRight
            variants={ArrowVariants}
            initial="init"
            animate="ani"
            exit="ex"
          >
            <Right />
          </SliderRight>
        </SlideBanner>
        <List>
          {dayData?.results.slice(1, 6).map((data) => (
            <Box
              key={data.id}
              bgphoto={makeImagePath(data.backdrop_path, "w500")}
              variants={ListVariants}
              initial="init"
              animate="ani"
              exit="ex"
            >
              <BoxNumber>{1}</BoxNumber>
            </Box>
          ))}
        </List>
      </Row>
    </Wrapper>
  );
}

export default HomeA;
