const deviceIdToRoomId = (deviceId) => {
  switch (deviceId) {
    case '310021001747353236343033': // Aralia tc-1
      return 1;
    case '210033001747353236343033': // Aloeswood tc-2
      return 2;
    case '330024000b47353235303037': // B tc-3
      return 3;
    case '2c0032001847353236343033': // Banyan tc-4
      return 4;
    case '2d0043001047343438323536': // C tc-5
      return 5;
    case '260020001447353236343033': // Cypress tc-6
      return 6;
    case '1c0027001947353236343033': // D tc-7
      return 7;
    case '2b003b001247353236343033': // E tc-8
      return 8;
    case '1a0028001747353236343033': // F tc-9
      return 9;
    case '1b0026001247353236343033': // G tc-10
      return 10;
    case '2a0026001447353236343033': // Marula tc-11
      return 11;
    case '29002c001847353236343033': // Portia tc-12
      return 12;
    case '350029001247353236343033': // Tamarind tc-13
      return 13;
    case '26003e001647353236343033': // Wisteria tc-14
      return 14;
    default:
      return 0;
  }
};

const roomMappings = [
  {
    coreId: '310021001747353236343033',
    roomName: 'Aralia',
    particleName: 'tc-1',
    isAssigned: true,
    tcId: 1,
  },

  {
    coreId: '210033001747353236343033',
    roomName: 'Aloeswood',
    particleName: 'tc-2',
    isAssigned: true,
    tcId: 2,
  },

  {
    coreId: '330024000b47353235303037',
    roomName: 'B',
    particleName: 'tc-3',
    isAssigned: true,
    tcId: 3,
  },

  {
    coreId: '2c0032001847353236343033',
    roomName: 'Banyan',
    particleName: 'tc-4',
    isAssigned: true,
    tcId: 4,
  },

  {
    coreId: '2d0043001047343438323536',
    roomName: 'C',
    particleName: 'tc-5',
    isAssigned: true,
    tcId: 5,
  },

  {
    coreId: '260020001447353236343033',
    roomName: 'Cypress',
    particleName: 'tc-6',
    isAssigned: true,
    tcId: 6,
  },

  {
    coreId: '1c0027001947353236343033',
    roomName: 'D',
    particleName: 'tc-7',
    isAssigned: true,
    tcId: 7,
  },

  {
    coreId: '2b003b001247353236343033',
    roomName: 'E',
    particleName: 'tc-8',
    isAssigned: true,
    tcId: 8,
  },

  {
    coreId: '1a0028001747353236343033',
    roomName: 'F',
    particleName: 'tc-9',
    isAssigned: true,
    tcId: 9,
  },

  {
    coreId: '1b0026001247353236343033',
    roomName: 'G',
    particleName: 'tc-10',
    isAssigned: true,
    tcId: 10,
  },

  {
    coreId: '2a0026001447353236343033',
    roomName: 'Marula',
    particleName: 'tc-11',
    isAssigned: true,
    tcId: 11,
  },

  {
    coreId: '29002c001847353236343033',
    roomName: 'Portia',
    particleName: 'tc-12',
    isAssigned: true,
    tcId: 12,
  },

  {
    coreId: '350029001247353236343033',
    roomName: 'Tamarind',
    particleName: 'tc-13',
    isAssigned: true,
    tcId: 13,
  },

  {
    coreId: '26003e001647353236343033',
    roomName: 'Wisteria',
    particleName: 'tc-14',
    isAssigned: true,
    tcId: 14,
  },

  {
    coreId: '300035000347353137323334',
    roomName: 'Crown Palm',
    particleName: 'tc-15',
    isAssigned: true,
    tcId: 15,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Acacia',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 16,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Bamboo',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 17,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Ironwood',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 18,
  },

  {
    coreId: 'xxxxx',
    roomName: 'A',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 19,
  },

  {
    coreId: 'xxxxx',
    roomName: 'H',
    particleName: 'tc-xx',
    isAssigned: false,
    tcId: 19,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Keynote',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 20,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Empress',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 21,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Ebony',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 22,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Guava',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 23,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Tamboti',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 24,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Mangrove',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 25,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Open Spaces',
    particleName: 'tc-xx',
    isAssigned: true,
    tcId: 26,
  },
];

export { deviceIdToRoomId, roomMappings };
