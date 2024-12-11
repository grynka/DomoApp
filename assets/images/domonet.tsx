import React from "react";
import Svg, { Path } from "react-native-svg";

interface LogoSvgProps {
  fill: string;
  width: number;
  height: number;
}

const LogoSvg: React.FC<LogoSvgProps> = ({ fill, width, height }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 106 85" fill="none">
      <Path
        d="M13.3764 70.9757H2.36616C2.36616 71.8486 2.28983 72.7975 2.17534 73.8413C2.06085 74.9609 1.88911 75.9857 1.69829 76.9156C1.50747 77.8455 1.31665 78.5856 1.12583 79.0791L1.10675 79.136L0.877768 79.2878L0.706031 79.3637L0.419802 79.4017H0V85H3.81638V82.2862H11.1248V85H14.903V79.4017H13.3764V70.9757ZM8.94941 79.4017H5.28569L5.36202 79.136C5.74365 77.7886 6.0108 76.8397 6.12529 76.3463C6.20162 75.9857 6.25887 75.6631 6.29703 75.3974C6.33519 75.1317 6.35427 74.7901 6.35427 74.3916V74.1829H8.9685V79.4017H8.94941Z"
        fill={fill}
      />
      <Path
        d="M28.8901 80.1418C29.5008 79.2498 29.8251 78.1112 29.8251 76.7638L29.8061 76.4412C29.8061 75.758 29.7107 75.1317 29.5198 74.5624C29.329 73.9931 29.0619 73.4807 28.7375 73.0063C28.0887 72.1143 27.2491 71.4691 26.2568 71.0706C25.2455 70.672 24.1769 70.4633 23.0511 70.4633C22.326 70.4633 21.5818 70.5582 20.8376 70.7669C20.4368 70.8808 20.0743 71.0136 19.7308 71.1655C19.3873 71.3363 19.0439 71.526 18.7004 71.7727C18.0325 72.2282 17.4982 72.8544 17.0784 73.6325C16.6586 74.4106 16.4487 75.3595 16.4487 76.4412C16.4487 77.9024 16.7731 79.136 17.4028 80.0849C18.0325 81.0337 18.8721 81.7359 19.8835 82.1724C20.9139 82.6089 22.0206 82.8366 23.2037 82.8366C24.3486 82.8366 25.4363 82.6089 26.4477 82.1724C27.459 81.7169 28.2795 81.0527 28.8901 80.1418ZM24.9402 78.7375C24.5967 79.4776 24.0242 79.8571 23.2419 79.8571C22.4214 79.8571 21.8107 79.4776 21.4291 78.7185C21.0666 78.0163 20.8757 77.2382 20.8757 76.4412C20.8757 75.6821 21.0475 74.9989 21.41 74.3726C21.7726 73.7084 22.345 73.3858 23.0702 73.3858C23.8716 73.3858 24.4822 73.7084 24.8639 74.3726C25.2264 74.9799 25.4172 75.6821 25.4172 76.4412C25.4172 77.2762 25.2646 78.0543 24.9402 78.7375Z"
        fill={fill}
      />
      <Path
        d="M39.843 77.9024L39.366 75.6821L37.7058 70.8998H31.8286V82.2862H36.2365V76.3083L36.6563 76.2704L36.9426 78.0732L38.2974 82.2862H41.3696L42.7435 78.0542L43.0297 76.2704L43.4495 76.3083V82.2862H47.9337V70.8998H42.0184L40.3391 75.701L39.843 77.9024Z"
        fill={fill}
      />
      <Path
        d="M62.646 80.1418C63.2566 79.2498 63.581 78.1112 63.581 76.7638L63.5619 76.4412C63.5619 75.758 63.4665 75.1317 63.2757 74.5624C63.0849 73.9931 62.8177 73.4807 62.4933 73.0063C61.8446 72.1143 61.005 71.4691 60.0127 71.0706C59.0013 70.672 57.9328 70.4633 56.8069 70.4633C56.0818 70.4633 55.3376 70.5582 54.5934 70.7669C54.1927 70.8808 53.8302 71.0136 53.4867 71.1655C53.1432 71.3363 52.7997 71.526 52.4563 71.7727C51.7884 72.2282 51.2541 72.8544 50.8343 73.6325C50.4145 74.4106 50.2046 75.3595 50.2046 76.4412C50.2046 77.9024 50.529 79.136 51.1587 80.0849C51.7884 81.0337 52.628 81.7359 53.6393 82.1724C54.6698 82.6089 55.7765 82.8366 56.9596 82.8366C58.1045 82.8366 59.1922 82.6089 60.2035 82.1724C61.2149 81.7169 62.0163 81.0527 62.646 80.1418ZM58.677 78.7375C58.3335 79.4776 57.761 79.8571 56.9787 79.8571C56.1581 79.8571 55.5475 79.4776 55.1658 78.7185C54.8033 78.0163 54.6124 77.2382 54.6124 76.4412C54.6124 75.6821 54.7842 74.9989 55.1467 74.3726C55.5092 73.7084 56.0817 73.3858 56.8069 73.3858C57.6083 73.3858 58.2189 73.7084 58.6006 74.3726C58.9631 74.9799 59.1539 75.6821 59.1539 76.4412C59.1539 77.2762 59.0013 78.0543 58.677 78.7375Z"
        fill={fill}
      />
      <Path
        d="M70.0304 70.9757H65.6606V82.2862H70.0304V77.7317H73.7132V82.2862H78.1975V70.9757H73.656V74.6953H70.0304V70.9757Z"
        fill={fill}
      />
      <Path
        d="M92.6236 72.8355C92.1465 72.1523 91.4214 71.583 90.4864 71.1275C89.5514 70.672 88.3683 70.4443 86.9562 70.4443C85.9067 70.4443 84.9526 70.6151 84.1321 70.9567C83.3116 71.2983 82.6056 71.7538 82.0713 72.3231C81.5179 72.8924 81.1172 73.5566 80.8309 74.2777C80.5638 74.9989 80.4111 75.7959 80.4111 76.612C80.4111 76.9915 80.4493 77.3711 80.5256 77.7316C80.602 78.1112 80.7164 78.4718 80.85 78.8323C81.1553 79.5725 81.5942 80.2177 82.1285 80.787C82.6628 81.3563 83.3497 81.7928 84.1512 82.1344C84.9526 82.457 85.8876 82.6278 86.9562 82.6278H87.147C87.6813 82.6278 88.1775 82.6089 88.5973 82.5519C89.0171 82.495 89.4369 82.4191 89.8376 82.3242C90.6009 82.0965 91.2497 81.7928 91.7839 81.4323C92.2992 81.0717 92.6999 80.6542 92.9861 80.1987C93.2342 79.8002 93.4059 79.3827 93.5013 78.9462H89.2651C89.1697 79.2688 88.9598 79.5155 88.6354 79.7053C88.292 79.9141 87.8912 80.0279 87.4714 80.0279C86.8417 80.0279 86.2693 79.8192 85.7731 79.3827C85.506 79.136 85.2961 78.8703 85.1625 78.5477C85.029 78.244 84.9526 77.8835 84.9526 77.4849V77.2762H93.9211L93.9402 76.9346C93.9402 76.3273 93.8448 75.6441 93.654 74.923C93.4632 74.2398 93.1197 73.5376 92.6236 72.8355ZM84.7236 75.2266L84.8 74.9609C84.9908 74.2398 85.277 73.7464 85.6587 73.4617C86.0403 73.1771 86.5364 73.0442 87.1661 73.0442C87.7958 73.0442 88.3492 73.1771 88.769 73.4617C89.2079 73.7464 89.5132 74.2588 89.6849 74.9609L89.7613 75.2266H84.7236Z"
        fill={fill}
      />
      <Path
        d="M95.1235 74.1639H98.4056V82.2862H102.699V74.1639H106V70.9757H95.1235V74.1639Z"
        fill={fill}
      />
      <Path
        d="M60.8142 14.5178H49.6704V62.7584H60.8142V14.5178Z"
        fill="#ED7000"
      />
      <Path
        d="M86.4028 37.2337V50.8216H92.7189V66.6867H104.359V46.6845L95.6957 46.6655V42.5095V37.2337H86.4028Z"
        fill="#30AF15"
      />
      <Path
        d="M25.112 60.5001H22.6313V32.793H26.2378V27.3275H36.3703V35.2032H39.786V55.6608H35.607V42.4336H25.4364V60.5001H25.112Z"
        fill="#A52828"
      />
      <Path
        d="M16.4295 45.1094H5.28564V64.808H16.4295V45.1094Z"
        fill="#0093C9"
      />
      <Path
        d="M0.0576172 66.6868V46.5707H15.7429V55.1864H18.1854V27.764H22.2499V22.1277H31.7908V27.3655H36.6758V33.9886H41.8279V47.0641H45.1482V10.8551H51.7123V0H54.1739V10.8551H59.5359V31.6164H65.0315V24.9743H69.9165V19.6606H78.7132V41.8832H81.5755V32.6792H94.265V44.6729H100.81H100.829V51.353H105.962V66.6868H103.482V53.8201H98.3294V47.14H91.8034V35.1273H84.0562V44.3503H76.2326V22.1277H72.3971V27.4414H67.5122V34.0835H57.0553V29.6048V13.3222H47.6288V49.5312H39.3473V36.4367H34.1952V29.8326H29.3102V24.5948H24.7305V30.2121H20.647V57.6535H13.2623V49.0377H2.53827V66.6868H0.0576172Z"
        fill={fill}
      />
      <Path
        d="M24.1958 66.6868V41.7124H35.8548V54.4273H41.5413V66.6868H39.0797V56.8944H33.3933V44.1795H26.6764V66.6868H24.1958Z"
        fill={fill}
      />
      <Path
        d="M54.231 66.6868V44.616H57.1505V39.2643H68.924V47.8801H73.4274V66.6868H70.9467V50.3472H66.4434V41.7314H59.6311V47.0831H56.7116V66.6868H54.231Z"
        fill={fill}
      />
      <Path
        d="M77.6826 66.6868V55.0726H82.6248V49.8348H94.1694V66.6868H91.6887V52.3019H85.0864V57.5397H80.1633V66.6868H77.6826Z"
        fill={fill}
      />
    </Svg>
  );
};

export default LogoSvg;
