import OrderIcon from '@assets/svg/gnb/order.svg';
import MenuIcon from '@assets/svg/gnb/menu.svg';
import SalesIcon from '@assets/svg/gnb/sales.svg';
import StoreIcon from '@assets/svg/gnb/store.svg';
import NoticeIcon from '@assets/svg/gnb/notice.svg';

type GNBItemType = {
  id: number;
  link: string;
  text: string;
  icon: JSX.Element;
};

const GNBItems: GNBItemType[] = [
  {
    id: 1,
    link: '/owner',
    text: '주문접수',
    icon: <OrderIcon />,
  },
  {
    id: 2,
    link: '/owner/menu',
    text: '메뉴관리',
    icon: <MenuIcon />,
  },
  {
    id: 3,
    link: '/owner/sales',
    text: '매출관리',
    icon: <SalesIcon />,
  },
  {
    id: 4,
    link: '/owner/store',
    text: '매장관리',
    icon: <StoreIcon />,
  },
  {
    id: 5,
    link: '/owner/notice',
    text: '공지사항',
    icon: <NoticeIcon />,
  },
];

export default GNBItems;
