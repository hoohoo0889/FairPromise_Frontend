import { FC, useMemo, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../header/Header';
import SloganBanner from './sloganBanner/SloganBanner';
import { huboList } from '../../constance/data';
import { huboInfo } from '../../constance/huboinfo';
import HuboInformation from './huboInformation/HuboInformation';
import QueryString from 'qs';
import { throttle } from 'lodash';
import HuboChangeModal from './huboChangeModal/HuboChangeModal';

const HuboDetail: FC = () => {
  const location = useLocation();
  const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
  const [zIndex, setZIndex] = useState(10);

  const handlerScroll = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY >= 10) {
          setZIndex(101);
        } else if (window.scrollY < 10) {
          setZIndex(10);
        }
      }, 200),
    [],
  );

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
    return () => {
      window.removeEventListener('scroll', handlerScroll);
    };
  }, [handlerScroll]);

  return (
    <>
      <HuboChangeModal />
      <Header theme={'black'} zIndex={zIndex}></Header>
      {huboList.map((value, index) => {
        if (String(value.giho) === queryData.id) {
          return <SloganBanner key={index} huboinfo={value} />;
        }
      })}
      {huboInfo.map((value, index) => {
        if (value.GIHO === queryData.id) {
          return <HuboInformation key={index} huboinfo={value} />;
        }
      })}
    </>
  );
};

export default HuboDetail;
