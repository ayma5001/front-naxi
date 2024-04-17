
import { useRecoilValue } from 'recoil';

import { Stack, Typography } from '@mui/material';

import { Translator } from 'components/i18n';

import 'assets/logo_dark.svg';
import LogoDark from 'assets/logo_dark.svg?react';
import 'assets/logo_light.svg';
import LogoLight from 'assets/logo_light.svg?react';
import LogoNaxi from 'assets/naxi-logo.png';

import { settingsState } from 'state/settings';

export default function WaterMark() {
  const { theme } = useRecoilValue(settingsState);
  // const Logo = theme === 'light' ? LogoLight : LogoDark;
  return (
    <Stack mx="auto" className="watermark">
      <a
        href="https://naxicap.com/en/"
        target="_blank"
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none'
        }}
      >
        <Typography fontSize="12px" color="text.secondary">
          <Translator path="All Right Reserverd 2024" />
        </Typography>
        <img
          src={LogoNaxi}
          alt="Logo"
          style={{
            width: 65,
            height: 'auto',
            filter: 'grayscale(1)',
            marginLeft: '4px'
          }}
        />
      </a>
    </Stack>
  );
}








// import { useRecoilValue } from 'recoil';
// import { Stack, Typography } from '@mui/material';
// import { Translator } from 'components/i18n';
// import LogoDark from 'assets/naxi-logo.png'; // Importez le fichier PNG
// // import LogoLight from 'assets/logo_light.png'; // Importez le fichier PNG si nécessaire
// import { settingsState } from 'state/settings';

// export default function WaterMark() {
//   const { theme } = useRecoilValue(settingsState);
//   // const Logo = theme === 'light' ? LogoLight : LogoDark; // Utilisez cette ligne si nécessaire
//   return (
//     <Stack mx="auto" className="watermark">
//       <a
//         href="https://github.com/Chainlit/chainlit"
//         target="_blank"
//         style={{
//           display: 'flex',
//           alignItems: 'center',
//           textDecoration: 'none'
//         }}
//       >
//         <Typography fontSize="12px" color="text.secondary">
//           <Translator path="NaxiGpt All Right Reserved" />
//         </Typography>
//         {/* Utilisez la balise <img> avec l'attribut src */}
//         <img
//           src={LogoDark}
//           alt="Logo"
//           style={{
//             width: 65,
//             height: 'auto',
//             filter: 'grayscale(1)',
//             marginLeft: '4px'
//           }}
//         />
//       </a>
//     </Stack>
//   );
// }
