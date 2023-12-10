import { useQuery } from "react-query";
import styled from "styled-components";
import { IPopularMovies, getPopularMovies, makeImagePath } from "./api";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background: ${(props) => props.theme.black.normal};
  height: 300vh;
  position: relative;
`;

const Box1 = styled.div`
  position: relative;
  top: 120px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
`;

const ImageBox = styled.div`
  position: absolute;
  width: 80%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
`;

const Cover = styled.div<{ bgphoto: string }>`
  height: 120px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), transparent),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  filter: blur(1px);
`;

const Intro = styled.div`
  position: absolute;
  top: 50%;
  left: 32%;
  display: flex;
  flex-direction: column;
  background: transparent;
  z-index: 999;
  h2 {
    width: 52%;
    color: ${(props) => props.theme.white};
    margin-bottom: 25px;
    font-weight: bold;
    font-size: 30px;
  }
  button {
    border: none;
    background: ${(props) => props.theme.accent};
    border-radius: 12px;
    color: ${(props) => props.theme.white};
    width: 140px;
    padding: 10px;
    font-weight: bold;
    font-size: 16px;
    margin-left: 200px;
    margin-top: 40px;
  }
`;
function HomeB() {
  const { data: movieData, isLoading: isLoading1 } = useQuery<IPopularMovies>(
    ["movies", "popularmovies"],
    getPopularMovies
  );

  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/login`);
  };
  return (
    <Wrapper>
      <Box1>
        <ImageBox>
          {movieData?.results.map((movie) => (
            <Cover
              key={movie.id}
              bgphoto={makeImagePath(movie.backdrop_path, "w500")}
            />
          ))}
        </ImageBox>
        <Intro>
          <h2>
            MOVING 오리지널부터 드라마, 영화까지 무제한으로 스트리밍해 보세요
          </h2>
          <button onClick={onClick}>로그인하기</button>
        </Intro>
      </Box1>
    </Wrapper>
  );
}

export default HomeB;
