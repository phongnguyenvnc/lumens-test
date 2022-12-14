import React, { HTMLAttributes, ReactElement } from 'react'

interface Props extends HTMLAttributes<SVGElement> {
  width?: number;
  height?: number;
  color?: string;
  hasNew?: boolean;
}

export default function Bell({ width = 40, height = 40, color = '#d5d5dc', hasNew = false }: Props): ReactElement {
  if (hasNew) {
    return (
      <svg width='30px' height='34px' viewBox='0 0 30 34'>
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <g transform='translate(-125.000000, -24.000000)'>
            <g transform='translate(126.050000, 24.500000)'>
              <path d='M2.557,12.0673 L2.557,12.0673 L2.557,12.0633 C2.909,5.2198 8.889,0.2522 15.6,1.1566 C20.855,1.8647 25.077,6.432 25.343,11.7786 C25.4,12.9832 25.399,14.1573 25.399,15.3582 C25.398,16.1168 25.398,16.8862 25.412,17.6808 L25.412,17.6888 L25.412,17.6968 C25.428,18.1893 25.554,18.7175 25.767,19.1668 C26.258,20.2208 26.761,21.269 27.26,22.3106 C27.474,22.7571 27.688,23.2025 27.9,23.6465 L27.9,23.6467 L27.9,23.649 L27.9,23.6513 L27.9,23.6536 L27.9,23.6559 L27.9,23.6582 L27.9,23.6605 L27.9,23.6628 L27.9,23.6651 L27.9,23.6674 L27.9,23.6697 L27.9,23.6719 L27.9,23.6742 L27.9,23.6765 L27.9,23.6788 L27.9,23.6811 L27.9,23.6834 L27.9,23.6857 L27.9,23.688 L27.9,23.6903 L27.9,23.6926 L27.9,23.6949 L27.9,23.6972 L27.9,23.6995 L27.9,23.7018 L27.9,23.7041 L27.9,23.7064 L27.9,23.7087 L27.9,23.711 L27.9,23.7133 L27.9,23.7156 L27.9,23.7179 L27.9,23.7202 L27.9,23.7225 L27.9,23.7248 L27.9,23.7271 L27.9,23.7294 L27.9,23.7317 L27.9,23.734 L27.9,23.7363 L27.9,23.7386 L27.9,23.7409 L27.9,23.7432 L27.9,23.7455 L27.9,23.7478 L27.9,23.7501 L27.9,23.7524 L27.9,23.7547 L27.9,23.757 L27.9,23.7593 L27.9,23.7616 L27.9,23.7639 L27.9,23.7662 L27.9,23.7685 L27.9,23.7708 L27.9,23.7731 L27.9,23.7754 L27.9,23.7777 L27.9,23.78 L27.9,23.7823 L27.9,23.7846 L27.9,23.7869 L27.9,23.7892 L27.9,23.7915 L27.9,23.7938 L27.9,23.7961 L27.9,23.7984 L27.9,23.8007 L27.9,23.8031 L27.9,23.8054 L27.9,23.8077 L27.9,23.81 L27.9,23.8123 L27.9,23.8146 L27.9,23.8169 L27.9,23.8192 L27.9,23.8215 L27.9,23.8238 L27.9,23.8261 L27.9,23.8284 L27.9,23.8307 L27.9,23.833 L27.9,23.8353 L27.9,23.8376 L27.9,23.8399 L27.9,23.8422 L27.9,23.8445 L27.9,23.8468 L27.9,23.8491 L27.9,23.8514 L27.9,23.8537 L27.9,23.856 L27.9,23.8583 L27.9,23.8607 L27.9,23.863 L27.9,23.8653 L27.9,23.8676 L27.9,23.8699 L27.9,23.8722 L27.9,23.8745 L27.9,23.8768 L27.9,23.8791 L27.9,23.8814 L27.9,23.8837 L27.9,23.886 L27.9,23.8883 L27.9,23.8906 L27.9,23.8929 L27.9,23.8952 L27.9,23.8975 L27.9,23.8998 L27.9,23.9022 L27.9,23.9045 L27.9,23.9068 L27.9,23.9091 L27.9,23.9114 L27.9,23.9137 L27.9,23.916 L27.9,23.9183 L27.9,23.9206 L27.9,23.9229 L27.9,23.9252 L27.9,23.9275 L27.9,23.9298 L27.9,23.9321 L27.9,23.9344 L27.9,23.9367 L27.9,23.9391 L27.9,23.9414 L27.9,23.9437 L27.9,23.946 L27.9,23.9483 L27.9,23.9506 L27.9,23.9529 L27.9,23.9552 L27.9,23.9575 L27.9,23.9598 L27.9,23.9621 L27.9,23.9644 L27.9,23.9667 L27.9,23.969 L27.9,23.9713 L27.9,23.9737 L27.9,23.976 L27.9,23.9783 L27.9,23.9806 L27.9,23.9829 L27.9,23.9852 L27.9,23.9875 L27.9,23.9898 L27.9,23.9921 L27.9,23.9944 L27.9,23.9967 L27.9,23.999 L27.9,24.0013 L27.9,24.0036 L27.9,24.0059 L27.9,24.0083 L27.9,24.0106 L27.9,24.0129 L27.9,24.0152 L27.9,24.0175 L27.9,24.0198 L27.9,24.0221 L27.9,24.0244 L27.9,24.0267 L27.9,24.029 L27.9,24.0313 L27.9,24.0336 L27.9,24.0359 L27.9,24.0382 L27.9,24.0406 L27.9,24.0429 L27.9,24.0452 L27.9,24.0475 L27.9,24.0498 L27.9,24.0521 L27.9,24.0544 L27.9,24.0567 L27.9,24.059 L27.9,24.0613 L27.9,24.0636 L27.9,24.0659 L27.9,24.0682 L27.9,24.0705 L27.9,24.0728 L27.9,24.0751 L27.9,24.0775 L27.9,24.0798 L27.9,24.0821 L27.9,24.0844 L27.9,24.0867 L27.9,24.089 L27.9,24.0913 L27.9,24.0936 L27.9,24.0959 L27.9,24.0982 L27.9,24.1005 L27.9,24.1028 L27.9,24.1051 L27.9,24.1074 L27.9,24.1097 L27.9,24.112 L27.9,24.1143 L27.9,24.1167 L27.9,24.119 L27.9,24.1213 L27.9,24.1236 L27.9,24.1259 L27.9,24.1282 L27.9,24.1305 L27.9,24.1328 L27.9,24.1351 L27.9,24.1374 L27.9,24.1397 L27.9,24.142 L27.9,24.1443 L27.9,24.1466 L27.9,24.1489 L27.9,24.1512 L27.9,24.1535 L27.9,24.1558 L27.9,24.1581 L27.9,24.1604 L27.9,24.1628 L27.9,24.1651 L27.9,24.1674 L27.9,24.1697 L27.9,24.172 L27.9,24.1743 L27.9,24.1766 L27.9,24.1789 L27.9,24.1812 L27.9,24.1835 L27.9,24.1858 L27.9,24.1881 L27.9,24.1904 L27.9,24.1927 L27.9,24.195 L27.9,24.1973 L27.9,24.1996 L27.9,24.2019 L27.9,24.2042 L27.9,24.2065 L27.9,24.2088 L27.9,24.2111 L27.9,24.2134 L27.9,24.2157 L27.9,24.218 L27.9,24.2203 L27.9,24.2226 L27.9,24.2249 L27.9,24.2272 L27.9,24.2295 L27.9,24.2318 L27.9,24.2341 L27.9,24.2364 L27.9,24.2387 L27.9,24.241 L27.9,24.2433 L27.9,24.2456 L27.9,24.2479 L27.9,24.2502 L27.9,24.2525 L27.9,24.2548 L27.9,24.2571 L27.9,24.2594 L27.9,24.2617 L27.9,24.264 L27.9,24.2663 L27.9,24.2686 L27.9,24.2709 L27.9,24.2732 L27.9,24.2755 L27.9,24.2778 L27.9,24.2801 L27.9,24.2824 L27.9,24.2847 L27.9,24.287 L27.9,24.2893 L27.9,24.2916 L27.9,24.2939 L27.9,24.2962 L27.9,24.2985 L27.9,24.3008 L27.9,24.3031 L27.9,24.3054 L27.9,24.3077 L27.9,24.31 L27.9,24.3123 L27.9,24.3146 L27.9,24.3169 L27.9,24.3192 L27.9,24.3215 L27.9,24.3238 L27.9,24.3261 L27.9,24.3284 L27.9,24.3307 L27.9,24.333 L27.9,24.3353 L27.9,24.3376 L27.9,24.3399 L27.9,24.3422 L27.9,24.3445 L27.9,24.3468 L27.9,24.349 L27.9,24.3513 L27.9,24.3536 L27.9,24.3559 L27.9,24.3575 C27.87,24.4202 27.831,24.5045 27.793,24.5955 L27.788,24.6081 L27.783,24.6209 C27.473,25.432 26.843,25.8731 26.043,25.8731 L26.041,25.8731 C17.984,25.8848 9.927,25.8848 1.859,25.8731 L1.857,25.8731 C1.066,25.8731 0.426,25.4296 0.117,24.6209 L0.112,24.6081 L0.107,24.5955 C0.076,24.5202 0.036,24.4325 0,24.3535 L0,24.3513 L0,24.349 L0,24.3468 L0,24.3445 L0,24.3422 L0,24.3399 L0,24.3376 L0,24.3353 L0,24.333 L0,24.3307 L0,24.3284 L0,24.3261 L0,24.3238 L0,24.3215 L0,24.3192 L0,24.3169 L0,24.3146 L0,24.3123 L0,24.31 L0,24.3077 L0,24.3054 L0,24.3031 L0,24.3008 L0,24.2985 L0,24.2962 L0,24.2939 L0,24.2916 L0,24.2893 L0,24.287 L0,24.2847 L0,24.2824 L0,24.2801 L0,24.2778 L0,24.2755 L0,24.2732 L0,24.2709 L0,24.2686 L0,24.2663 L0,24.264 L0,24.2617 L0,24.2594 L0,24.2571 L0,24.2548 L0,24.2525 L0,24.2502 L0,24.2479 L0,24.2456 L0,24.2433 L0,24.241 L0,24.2387 L0,24.2364 L0,24.2341 L0,24.2318 L0,24.2295 L0,24.2272 L0,24.2249 L0,24.2226 L0,24.2203 L0,24.218 L0,24.2157 L0,24.2134 L0,24.2111 L0,24.2088 L0,24.2065 L0,24.2042 L0,24.2019 L0,24.1996 L0,24.1973 L0,24.195 L0,24.1927 L0,24.1904 L0,24.1881 L0,24.1858 L0,24.1835 L0,24.1812 L0,24.1789 L0,24.1766 L0,24.1743 L0,24.172 L0,24.1697 L0,24.1674 L0,24.1651 L0,24.1628 L0,24.1604 L0,24.1581 L0,24.1558 L0,24.1535 L0,24.1512 L0,24.1489 L0,24.1466 L0,24.1443 L0,24.142 L0,24.1397 L0,24.1374 L0,24.1351 L0,24.1328 L0,24.1305 L0,24.1282 L0,24.1259 L0,24.1236 L0,24.1213 L0,24.119 L0,24.1167 L0,24.1143 L0,24.112 L0,24.1097 L0,24.1074 L0,24.1051 L0,24.1028 L0,24.1005 L0,24.0982 L0,24.0959 L0,24.0936 L0,24.0913 L0,24.089 L0,24.0867 L0,24.0844 L0,24.0821 L0,24.0798 L0,24.0775 L0,24.0751 L0,24.0728 L0,24.0705 L0,24.0682 L0,24.0659 L0,24.0636 L0,24.0613 L0,24.059 L0,24.0567 L0,24.0544 L0,24.0521 L0,24.0498 L0,24.0475 L0,24.0452 L0,24.0429 L0,24.0406 L0,24.0382 L0,24.0359 L0,24.0336 L0,24.0313 L0,24.029 L0,24.0267 L0,24.0244 L0,24.0221 L0,24.0198 L0,24.0175 L0,24.0152 L0,24.0129 L0,24.0106 L0,24.0083 L0,24.0059 L0,24.0036 L0,24.0013 L0,23.999 L0,23.9967 L0,23.9944 L0,23.9921 L0,23.9898 L0,23.9875 L0,23.9852 L0,23.9829 L0,23.9806 L0,23.9783 L0,23.976 L0,23.9737 L0,23.9713 L0,23.969 L0,23.9667 L0,23.9644 L0,23.9621 L0,23.9598 L0,23.9575 L0,23.9552 L0,23.9529 L0,23.9506 L0,23.9483 L0,23.946 L0,23.9437 L0,23.9414 L0,23.9391 L0,23.9367 L0,23.9344 L0,23.9321 L0,23.9298 L0,23.9275 L0,23.9252 L0,23.9229 L0,23.9206 L0,23.9183 L0,23.916 L0,23.9137 L0,23.9114 L0,23.9091 L0,23.9068 L0,23.9045 L0,23.9022 L0,23.8998 L0,23.8975 L0,23.8952 L0,23.8929 L0,23.8906 L0,23.8883 L0,23.886 L0,23.8837 L0,23.8814 L0,23.8791 L0,23.8768 L0,23.8745 L0,23.8722 L0,23.8699 L0,23.8676 L0,23.8653 L0,23.863 L0,23.8607 L0,23.8583 L0,23.856 L0,23.8537 L0,23.8514 L0,23.8491 L0,23.8468 L0,23.8445 L0,23.8422 L0,23.8399 L0,23.8376 L0,23.8353 L0,23.833 L0,23.8307 L0,23.8284 L0,23.8261 L0,23.8238 L0,23.8215 L0,23.8192 L0,23.8169 L0,23.8146 L0,23.8123 L0,23.81 L0,23.8077 L0,23.8054 L0,23.8031 L0,23.8007 L0,23.7984 L0,23.7961 L0,23.7938 L0,23.7915 L0,23.7892 L0,23.7869 L0,23.7846 L0,23.7823 L0,23.78 L0,23.7777 L0,23.7754 L0,23.7731 L0,23.7708 L0,23.7685 L0,23.7662 L0,23.7639 L0,23.7616 L0,23.7593 L0,23.757 L0,23.7547 L0,23.7524 L0,23.7501 L0,23.7478 L0,23.7455 L0,23.7432 L0,23.7409 L0,23.7386 L0,23.7363 L0,23.734 L0,23.7317 L0,23.7294 L0,23.7271 L0,23.7248 L0,23.7225 L0,23.7202 L0,23.7179 L0,23.7156 L0,23.7133 L0,23.711 L0,23.7087 L0,23.7064 L0,23.7041 L0,23.7018 L0,23.6995 L0,23.6972 L0,23.6949 L0,23.6926 L0,23.6903 L0,23.688 L0,23.6857 L0,23.6834 L0,23.6811 L0,23.6788 L0,23.6765 L0,23.6742 L0,23.6719 L0,23.6697 L0,23.6674 L0,23.6651 L0,23.6628 L0,23.6605 L0,23.6582 L0,23.6559 L0,23.6536 L0,23.6513 L0,23.649 L0,23.6482 C0.155,23.3264 0.31,23.0038 0.466,22.6804 C1.034,21.5002 1.608,20.3094 2.168,19.1076 C2.367,18.6876 2.487,18.1994 2.488,17.7199 C2.502,16.9604 2.5,16.2307 2.498,15.5143 C2.495,14.3534 2.492,13.2277 2.557,12.0673 Z' id='Path' stroke={color} strokeWidth='2.1'></path>
              <path d='M17.447,29.6906 L17.448,29.6906 C17.251,30.0659 16.953,30.4333 16.563,30.7618 C15.809,31.3951 14.814,31.7881 13.838,31.7746 C12.949,31.7612 11.997,31.3513 11.263,30.7036 C10.9,30.3825 10.624,30.035 10.439,29.6906 L10.446,29.6906 L10.465,29.6906 L10.484,29.6906 L10.503,29.6906 L10.522,29.6906 L10.541,29.6906 L10.56,29.6906 L10.579,29.6906 L10.598,29.6906 L10.617,29.6906 L10.636,29.6906 L10.655,29.6906 L10.674,29.6906 L10.693,29.6906 L10.711,29.6906 L10.73,29.6906 L10.749,29.6906 L10.768,29.6906 L10.787,29.6906 L10.806,29.6906 L10.825,29.6906 L10.844,29.6906 L10.863,29.6906 L10.882,29.6906 L10.901,29.6906 L10.92,29.6906 L10.939,29.6906 L10.958,29.6906 L10.977,29.6906 L10.996,29.6906 L11.014,29.6906 L11.033,29.6906 L11.052,29.6906 L11.071,29.6906 L11.09,29.6906 L11.109,29.6906 L11.128,29.6906 L11.147,29.6906 L11.166,29.6906 L11.185,29.6906 L11.204,29.6906 L11.223,29.6906 L11.242,29.6906 L11.261,29.6906 L11.28,29.6906 L11.299,29.6906 L11.317,29.6906 L11.336,29.6906 L11.355,29.6906 L11.374,29.6906 L11.393,29.6906 L11.412,29.6906 L11.431,29.6906 L11.45,29.6906 L11.469,29.6906 L11.488,29.6906 L11.507,29.6906 L11.526,29.6906 L11.545,29.6906 L11.564,29.6906 L11.583,29.6906 L11.602,29.6906 L11.62,29.6906 L11.639,29.6906 L11.658,29.6906 L11.677,29.6906 L11.696,29.6906 L11.715,29.6906 L11.734,29.6906 L11.753,29.6906 L11.772,29.6906 L11.791,29.6906 L11.81,29.6906 L11.829,29.6906 L11.848,29.6906 L11.867,29.6906 L11.886,29.6906 L11.904,29.6906 L11.923,29.6906 L11.942,29.6906 L11.961,29.6906 L11.98,29.6906 L11.999,29.6906 L12.018,29.6906 L12.037,29.6906 L12.056,29.6906 L12.075,29.6906 L12.094,29.6906 L12.113,29.6906 L12.132,29.6906 L12.151,29.6906 L12.17,29.6906 L12.189,29.6906 L12.207,29.6906 L12.226,29.6906 L12.245,29.6906 L12.264,29.6906 L12.283,29.6906 L12.302,29.6906 L12.321,29.6906 L12.34,29.6906 L12.359,29.6906 L12.435,29.6906 L12.586,29.6906 L12.738,29.6906 L12.889,29.6906 L12.965,29.6906 L12.984,29.6906 L13.003,29.6906 L13.04,29.6906 L13.192,29.6906 L13.343,29.6906 L13.495,29.6906 L13.646,29.6906 L13.798,29.6906 L13.949,29.6906 L14.025,29.6906 L14.062,29.6906 L14.081,29.6906 L14.1,29.6906 L14.252,29.6906 L14.403,29.6906 L14.554,29.6906 L14.706,29.6906 L14.781,29.6906 L14.8,29.6906 L14.819,29.6906 L14.857,29.6906 L15.008,29.6906 L15.16,29.6906 L15.311,29.6906 L15.387,29.6906 L15.425,29.6906 L15.443,29.6906 L15.462,29.6906 L15.614,29.6906 L15.633,29.6906 L15.651,29.6906 L15.67,29.6906 L15.689,29.6906 L15.708,29.6906 L15.727,29.6906 L15.746,29.6906 L15.765,29.6906 L15.784,29.6906 L15.803,29.6906 L15.822,29.6906 L15.841,29.6906 L15.859,29.6906 L15.878,29.6906 L15.897,29.6906 L15.916,29.6906 L15.935,29.6906 L15.954,29.6906 L15.973,29.6906 L15.992,29.6906 L16.011,29.6906 L16.03,29.6906 L16.049,29.6906 L16.067,29.6906 L16.086,29.6906 L16.105,29.6906 L16.124,29.6906 L16.143,29.6906 L16.162,29.6906 L16.181,29.6906 L16.2,29.6906 L16.219,29.6906 L16.238,29.6906 L16.256,29.6906 L16.275,29.6906 L16.294,29.6906 L16.313,29.6906 L16.332,29.6906 L16.351,29.6906 L16.37,29.6906 L16.389,29.6906 L16.408,29.6906 L16.427,29.6906 L16.445,29.6906 L16.464,29.6906 L16.483,29.6906 L16.502,29.6906 L16.521,29.6906 L16.54,29.6906 L16.559,29.6906 L16.578,29.6906 L16.597,29.6906 L16.616,29.6906 L16.635,29.6906 L16.653,29.6906 L16.672,29.6906 L16.691,29.6906 L16.71,29.6906 L16.729,29.6906 L16.748,29.6906 L16.767,29.6906 L16.786,29.6906 L16.805,29.6906 L16.823,29.6906 L16.842,29.6906 L16.861,29.6906 L16.88,29.6906 L16.899,29.6906 L16.918,29.6906 L16.937,29.6906 L16.956,29.6906 L16.975,29.6906 L16.994,29.6906 L17.012,29.6906 L17.031,29.6906 L17.05,29.6906 L17.069,29.6906 L17.088,29.6906 L17.107,29.6906 L17.126,29.6906 L17.145,29.6906 L17.164,29.6906 L17.183,29.6906 L17.201,29.6906 L17.22,29.6906 L17.239,29.6906 L17.258,29.6906 L17.277,29.6906 L17.296,29.6906 L17.315,29.6906 L17.334,29.6906 L17.353,29.6906 L17.371,29.6906 L17.39,29.6906 L17.409,29.6906 L17.428,29.6906 L17.447,29.6906 Z' id='Path' stroke={color} strokeWidth='2.1'></path>
              <circle id='Oval' fill='#FC5A5A' fillRule='nonzero' cx='22.95' cy='6' r='6'></circle>
            </g>
          </g>
        </g>
      </svg>
    )
  }
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill='none'>
      <path d='M8.60654 16.0673L8.60654 16.0673L8.60675 16.0633C8.95919 9.21981 14.9391 4.25216 21.6505 5.15659C26.9049 5.86467 31.1272 10.432 31.3931 15.7786C31.4498 16.9832 31.4492 18.1573 31.4486 19.3582C31.4482 20.1168 31.4478 20.8862 31.4618 21.6808L31.4619 21.6888L31.4622 21.6968C31.4784 22.1893 31.6041 22.7175 31.8173 23.1668C32.3076 24.2208 32.8105 25.269 33.3102 26.3106C33.5245 26.7571 33.7382 27.2025 33.95 27.6465V27.6467V27.649V27.6513V27.6536V27.6559V27.6582V27.6605V27.6628V27.6651V27.6674V27.6697V27.6719V27.6742V27.6765V27.6788V27.6811V27.6834V27.6857V27.688V27.6903V27.6926V27.6949V27.6972V27.6995V27.7018V27.7041V27.7064V27.7087V27.711V27.7133V27.7156V27.7179V27.7202V27.7225V27.7248V27.7271V27.7294V27.7317V27.734V27.7363V27.7386V27.7409V27.7432V27.7455V27.7478V27.7501V27.7524V27.7547V27.757V27.7593V27.7616V27.7639V27.7662V27.7685V27.7708V27.7731V27.7754V27.7777V27.78V27.7823V27.7846V27.7869V27.7892V27.7915V27.7938V27.7961V27.7984V27.8007V27.8031V27.8054V27.8077V27.81V27.8123V27.8146V27.8169V27.8192V27.8215V27.8238V27.8261V27.8284V27.8307V27.833V27.8353V27.8376V27.8399V27.8422V27.8445V27.8468V27.8491V27.8514V27.8537V27.856V27.8583V27.8607V27.863V27.8653V27.8676V27.8699V27.8722V27.8745V27.8768V27.8791V27.8814V27.8837V27.886V27.8883V27.8906V27.8929V27.8952V27.8975V27.8998V27.9022V27.9045V27.9068V27.9091V27.9114V27.9137V27.916V27.9183V27.9206V27.9229V27.9252V27.9275V27.9298V27.9321V27.9344V27.9367V27.9391V27.9414V27.9437V27.946V27.9483V27.9506V27.9529V27.9552V27.9575V27.9598V27.9621V27.9644V27.9667V27.969V27.9713V27.9737V27.976V27.9783V27.9806V27.9829V27.9852V27.9875V27.9898V27.9921V27.9944V27.9967V27.999V28.0013V28.0036V28.0059V28.0083V28.0106V28.0129V28.0152V28.0175V28.0198V28.0221V28.0244V28.0267V28.029V28.0313V28.0336V28.0359V28.0382V28.0406V28.0429V28.0452V28.0475V28.0498V28.0521V28.0544V28.0567V28.059V28.0613V28.0636V28.0659V28.0682V28.0705V28.0728V28.0751V28.0775V28.0798V28.0821V28.0844V28.0867V28.089V28.0913V28.0936V28.0959V28.0982V28.1005V28.1028V28.1051V28.1074V28.1097V28.112V28.1143V28.1167V28.119V28.1213V28.1236V28.1259V28.1282V28.1305V28.1328V28.1351V28.1374V28.1397V28.142V28.1443V28.1466V28.1489V28.1512V28.1535V28.1558V28.1581V28.1604V28.1628V28.1651V28.1674V28.1697V28.172V28.1743V28.1766V28.1789V28.1812V28.1835V28.1858V28.1881V28.1904V28.1927V28.195V28.1973V28.1996V28.2019V28.2042V28.2065V28.2088V28.2111V28.2134V28.2157V28.218V28.2203V28.2226V28.2249V28.2272V28.2295V28.2318V28.2341V28.2364V28.2387V28.241V28.2433V28.2456V28.2479V28.2502V28.2525V28.2548V28.2571V28.2594V28.2617V28.264V28.2663V28.2686V28.2709V28.2732V28.2755V28.2778V28.2801V28.2824V28.2847V28.287V28.2893V28.2916V28.2939V28.2962V28.2985V28.3008V28.3031V28.3054V28.3077V28.31V28.3123V28.3146V28.3169V28.3192V28.3215V28.3238V28.3261V28.3284V28.3307V28.333V28.3353V28.3376V28.3399V28.3422V28.3445V28.3468V28.349V28.3513V28.3536V28.3559V28.3575C33.9204 28.4202 33.8807 28.5045 33.8432 28.5955L33.838 28.6081L33.8331 28.6209C33.5232 29.432 32.8931 29.8731 32.093 29.8731L32.0915 29.8731C24.0344 29.8848 15.9773 29.8848 7.90851 29.8731H7.90698C7.11604 29.8731 6.47585 29.4296 6.1669 28.6209L6.16201 28.6081L6.15679 28.5955C6.12574 28.5202 6.08633 28.4325 6.05 28.3535V28.3513V28.349V28.3468V28.3445V28.3422V28.3399V28.3376V28.3353V28.333V28.3307V28.3284V28.3261V28.3238V28.3215V28.3192V28.3169V28.3146V28.3123V28.31V28.3077V28.3054V28.3031V28.3008V28.2985V28.2962V28.2939V28.2916V28.2893V28.287V28.2847V28.2824V28.2801V28.2778V28.2755V28.2732V28.2709V28.2686V28.2663V28.264V28.2617V28.2594V28.2571V28.2548V28.2525V28.2502V28.2479V28.2456V28.2433V28.241V28.2387V28.2364V28.2341V28.2318V28.2295V28.2272V28.2249V28.2226V28.2203V28.218V28.2157V28.2134V28.2111V28.2088V28.2065V28.2042V28.2019V28.1996V28.1973V28.195V28.1927V28.1904V28.1881V28.1858V28.1835V28.1812V28.1789V28.1766V28.1743V28.172V28.1697V28.1674V28.1651V28.1628V28.1604V28.1581V28.1558V28.1535V28.1512V28.1489V28.1466V28.1443V28.142V28.1397V28.1374V28.1351V28.1328V28.1305V28.1282V28.1259V28.1236V28.1213V28.119V28.1167V28.1143V28.112V28.1097V28.1074V28.1051V28.1028V28.1005V28.0982V28.0959V28.0936V28.0913V28.089V28.0867V28.0844V28.0821V28.0798V28.0775V28.0751V28.0728V28.0705V28.0682V28.0659V28.0636V28.0613V28.059V28.0567V28.0544V28.0521V28.0498V28.0475V28.0452V28.0429V28.0406V28.0382V28.0359V28.0336V28.0313V28.029V28.0267V28.0244V28.0221V28.0198V28.0175V28.0152V28.0129V28.0106V28.0083V28.0059V28.0036V28.0013V27.999V27.9967V27.9944V27.9921V27.9898V27.9875V27.9852V27.9829V27.9806V27.9783V27.976V27.9737V27.9713V27.969V27.9667V27.9644V27.9621V27.9598V27.9575V27.9552V27.9529V27.9506V27.9483V27.946V27.9437V27.9414V27.9391V27.9367V27.9344V27.9321V27.9298V27.9275V27.9252V27.9229V27.9206V27.9183V27.916V27.9137V27.9114V27.9091V27.9068V27.9045V27.9022V27.8998V27.8975V27.8952V27.8929V27.8906V27.8883V27.886V27.8837V27.8814V27.8791V27.8768V27.8745V27.8722V27.8699V27.8676V27.8653V27.863V27.8607V27.8583V27.856V27.8537V27.8514V27.8491V27.8468V27.8445V27.8422V27.8399V27.8376V27.8353V27.833V27.8307V27.8284V27.8261V27.8238V27.8215V27.8192V27.8169V27.8146V27.8123V27.81V27.8077V27.8054V27.8031V27.8007V27.7984V27.7961V27.7938V27.7915V27.7892V27.7869V27.7846V27.7823V27.78V27.7777V27.7754V27.7731V27.7708V27.7685V27.7662V27.7639V27.7616V27.7593V27.757V27.7547V27.7524V27.7501V27.7478V27.7455V27.7432V27.7409V27.7386V27.7363V27.734V27.7317V27.7294V27.7271V27.7248V27.7225V27.7202V27.7179V27.7156V27.7133V27.711V27.7087V27.7064V27.7041V27.7018V27.6995V27.6972V27.6949V27.6926V27.6903V27.688V27.6857V27.6834V27.6811V27.6788V27.6765V27.6742V27.6719V27.6697V27.6674V27.6651V27.6628V27.6605V27.6582V27.6559V27.6536V27.6513V27.649V27.6482C6.20464 27.3264 6.36006 27.0038 6.51586 26.6804C7.08447 25.5002 7.6582 24.3094 8.21783 23.1076C8.41655 22.6876 8.5366 22.1994 8.53835 21.7199C8.55215 20.9604 8.55024 20.2307 8.54836 19.5143C8.54531 18.3534 8.54236 17.2277 8.60654 16.0673Z' stroke={color} strokeWidth='2.1'/>
      <path d='M23.497 33.6906H23.4984C23.3005 34.0659 23.0032 34.4333 22.6125 34.7618C21.8591 35.3951 20.8636 35.7881 19.8877 35.7746C18.9992 35.7612 18.0465 35.3513 17.3132 34.7036C16.9497 34.3825 16.6744 34.035 16.4887 33.6906H16.4963H16.5152H16.5342H16.5531H16.5721H16.591H16.6099H16.6289H16.6478H16.6668H16.6857H16.7046H16.7236H16.7425H16.7614H16.7804H16.7993H16.8183H16.8372H16.8561H16.8751H16.894H16.913H16.9319H16.9508H16.9698H16.9887H17.0077H17.0266H17.0455H17.0645H17.0834H17.1023H17.1213H17.1402H17.1592H17.1781H17.197H17.216H17.2349H17.2538H17.2728H17.2917H17.3107H17.3296H17.3485H17.3675H17.3864H17.4053H17.4243H17.4432H17.4622H17.4811H17.5H17.519H17.5379H17.5568H17.5758H17.5947H17.6136H17.6326H17.6515H17.6705H17.6894H17.7083H17.7273H17.7462H17.7651H17.7841H17.803H17.8219H17.8409H17.8598H17.8787H17.8977H17.9166H17.9356H17.9545H17.9734H17.9924H18.0113H18.0302H18.0492H18.0681H18.087H18.106H18.1249H18.1438H18.1628H18.1817H18.2006H18.2196H18.2385H18.2574H18.2764H18.2953H18.3142H18.3332H18.3521H18.371H18.39H18.4089H18.4846H18.6361H18.7876H18.939H19.0147H19.0336H19.0526H19.0904H19.2419H19.3933H19.5447H19.6961H19.8475H19.9989H20.0746H20.1125H20.1314H20.1503H20.3017H20.4531H20.6044H20.7558H20.8314H20.8503H20.8693H20.9071H21.0584H21.2097H21.3611H21.4367H21.4745H21.4934H21.5123H21.6636H21.6825H21.7015H21.7204H21.7393H21.7582H21.7771H21.796H21.8149H21.8338H21.8527H21.8716H21.8905H21.9095H21.9284H21.9473H21.9662H21.9851H22.004H22.0229H22.0418H22.0607H22.0796H22.0985H22.1174H22.1363H22.1552H22.1741H22.193H22.2119H22.2309H22.2498H22.2687H22.2876H22.3065H22.3254H22.3443H22.3632H22.3821H22.401H22.4199H22.4388H22.4577H22.4766H22.4955H22.5144H22.5333H22.5522H22.5711H22.59H22.6089H22.6278H22.6467H22.6656H22.6845H22.7034H22.7223H22.7412H22.7601H22.779H22.7979H22.8168H22.8357H22.8546H22.8735H22.8924H22.9113H22.9302H22.9491H22.968H22.9869H23.0058H23.0247H23.0436H23.0625H23.0813H23.1002H23.1191H23.138H23.1569H23.1758H23.1947H23.2136H23.2325H23.2514H23.2703H23.2892H23.3081H23.327H23.3459H23.3647H23.3836H23.4025H23.4214H23.4403H23.4592H23.4781H23.497Z' stroke={color} strokeWidth='2.1'/>
    </svg>
  )
}
