import { FC } from 'react';
import * as S from './style';

interface Props {
  huboinfo: {
    huboid: string;
    giho: number;
    name: string;
    jd_name: string;
    color: string;
    slogan: string;
  };
}

const SloganBanner: FC<Props> = (props) => {
  const { giho, jd_name, color, slogan, name } = props.huboinfo;
  return (
    <>
      <S.SloganBannerWrapper color={color}>
        <S.LeftWrapper>
          <p>{jd_name}</p>
          <h1>{slogan}</h1>
        </S.LeftWrapper>
        <S.RightWrapper giho={giho}>
          <h1>{giho}</h1>
          <S.HuboImageList giho={giho}>
            <img src={require(`../../../assets/image/${name}.svg`)} alt="후보자 사진" />
          </S.HuboImageList>
        </S.RightWrapper>
      </S.SloganBannerWrapper>
    </>
  );
};

export default SloganBanner;