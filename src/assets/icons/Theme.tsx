import React, { FunctionComponent } from 'react';

interface Props {
  active?: boolean;
}

const ThemeIcon: FunctionComponent<Props> = (props) => {
  if (props.active) {
    return (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.9943 11.3231L21.9931 11.3933C21.9977 11.2628 22 11.1317 22 11C22 10.8683 21.9977 10.7372 21.9931 10.6067L19.9943 10.6769C19.9981 10.7841 20 10.8918 20 11C20 11.1082 19.9981 11.2159 19.9943 11.3231ZM17.5874 4.86756L19.0509 3.5044C18.8724 3.3128 18.6872 3.12757 18.4956 2.9491L17.1324 4.41259C17.2894 4.55881 17.4412 4.71057 17.5874 4.86756ZM11.3231 2.00567L11.3933 0.00690168C11.2628 0.00231337 11.1317 0 11 0C10.8683 0 10.7372 0.00231339 10.6067 0.00690173L10.6769 2.00567C10.7841 2.0019 10.8918 2 11 2C11.1082 2 11.2159 2.0019 11.3231 2.00567ZM4.86756 4.41259L3.5044 2.9491C3.3128 3.12757 3.12757 3.3128 2.9491 3.5044L4.41259 4.86756C4.55881 4.71057 4.71057 4.55881 4.86756 4.41259ZM0 11C0 10.8683 0.00231337 10.7372 0.00690168 10.6067L2.00567 10.6769C2.0019 10.7841 2 10.8918 2 11C2 11.1082 2.0019 11.2159 2.00567 11.3231L0.00690173 11.3933C0.00231339 11.2628 0 11.1317 0 11ZM4.41259 17.1324L2.9491 18.4956C3.12757 18.6872 3.3128 18.8724 3.5044 19.0509L4.86756 17.5874C4.71057 17.4412 4.55881 17.2894 4.41259 17.1324ZM10.6769 19.9943L10.6067 21.9931C10.7372 21.9977 10.8683 22 11 22C11.1317 22 11.2628 21.9977 11.3933 21.9931L11.3231 19.9943C11.2159 19.9981 11.1082 20 11 20C10.8918 20 10.7841 19.9981 10.6769 19.9943ZM17.1324 17.5874L18.4956 19.0509C18.6872 18.8724 18.8724 18.6872 19.0509 18.4956L17.5874 17.1324C17.4412 17.2894 17.2894 17.4412 17.1324 17.5874ZM11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16Z"
          fill="#626E81"
        />
      </svg>
    );
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <g clipPath="url(#moon)">
        <path
          fill="#A2ADC0"
          d="M4.262 18.192a9.31 9.31 0 01-.725-.816.391.391 0 01-.011-.466.392.392 0 01.443-.141c3.284 1.141 6.966.209 9.608-2.435 2.644-2.644 3.577-6.326 2.435-9.607a.39.39 0 01.376-.515.39.39 0 01.231.082c.29.23.57.478.83.737a9.203 9.203 0 012.65 5.485 9.257 9.257 0 01-1.939 6.86C14.978 21.41 9.11 22.1 5.078 18.92a9.521 9.521 0 01-.816-.727z"
        />
      </g>
      <defs>
        <clipPath id="moon">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ThemeIcon;
