import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useScroll } from "framer-motion";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ReactComponent as MovingLogo } from "./image/Logo.svg";

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: transparent;
  z-index: 1000;
`;

const Logo = styled.div`
  width: 180px;
  height: 60px;
  margin: 10px;
`;

const Items = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Item = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  background: ${(props) => props.theme.accent};
  border: none;
  color: ${(props) => props.theme.white};
  margin: 0 5px;
`;

const Search = styled.form`
  position: relative;
  margin-left: 800px;
  display: flex;
  align-items: center;
  svg {
    z-index: 999;
    margin-right: 80px;
  }
`;

const Input = styled(motion.input)`
  position: absolute;
  background: transparent;
  border: none;
  color: ${(props) => props.theme.white};
`;

const WrapperVariant = {
  up: { background: "rgba(0,0,0,1)" },
  scroll: { background: "rgba(0,0,0,0)" },
};

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
  };

  const { register, handleSubmit } = useForm<{ keyword: string }>();
  const onValid = () => {};

  return (
    <Wrapper>
      <Link to="/">
        <Logo>
          <MovingLogo />
        </Logo>
      </Link>
      <Search onSubmit={handleSubmit(onValid)}>
        <motion.svg
          onClick={toggleSearch}
          initial={{ x: 0 }}
          animate={{ x: searchOpen ? 0 : 170 }}
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512"
        >
          <path
            fill="white"
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </motion.svg>
        <Input
          {...register("keyword", { required: true, minLength: 2 })}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: searchOpen ? 1 : 0 }}
        />
      </Search>
      <Items>
        <Item>지금 가입</Item>
        <Item>로그인</Item>
      </Items>
    </Wrapper>
  );
}

export default Header;
