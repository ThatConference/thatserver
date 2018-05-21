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
    particleId: 'tc-1',
    isAssigned: true,
    id: 1,
  },

  {
    coreId: '210033001747353236343033',
    roomName: 'Aloeswood',
    particleId: 'tc-2',
    isAssigned: true,
    id: 2,
  },

  {
    coreId: '330024000b47353235303037',
    roomName: 'B',
    particleId: 'tc-3',
    isAssigned: true,
    id: 3,
  },

  {
    coreId: '2c0032001847353236343033',
    roomName: 'Banyan',
    particleId: 'tc-4',
    isAssigned: true,
    id: 4,
  },

  {
    coreId: '2d0043001047343438323536',
    roomName: 'C',
    particleId: 'tc-5',
    isAssigned: true,
    id: 5,
  },

  {
    coreId: '260020001447353236343033',
    roomName: 'Cypress',
    particleId: 'tc-6',
    isAssigned: true,
    id: 6,
  },

  {
    coreId: '1c0027001947353236343033',
    roomName: 'D',
    particleId: 'tc-7',
    isAssigned: true,
    id: 7,
  },

  {
    coreId: '2b003b001247353236343033',
    roomName: 'E',
    particleId: 'tc-8',
    isAssigned: true,
    id: 8,
  },

  {
    coreId: '1a0028001747353236343033',
    roomName: 'F',
    particleId: 'tc-9',
    isAssigned: true,
    id: 9,
  },

  {
    coreId: '1b0026001247353236343033',
    roomName: 'G',
    particleId: 'tc-10',
    isAssigned: true,
    id: 10,
  },

  {
    coreId: '2a0026001447353236343033',
    roomName: 'Marula',
    particleId: 'tc-11',
    isAssigned: true,
    id: 11,
  },

  {
    coreId: '29002c001847353236343033',
    roomName: 'Portia',
    particleId: 'tc-12',
    isAssigned: true,
    id: 12,
  },

  {
    coreId: '350029001247353236343033',
    roomName: 'Tamarind',
    particleId: 'tc-13',
    isAssigned: true,
    id: 13,
  },

  {
    coreId: '26003e001647353236343033',
    roomName: 'Wisteria',
    particleId: 'tc-14',
    isAssigned: true,
    id: 14,
  },

  {
    coreId: '300035000347353137323334',
    roomName: 'Crown Palm',
    particleId: 'tc-15',
    isAssigned: true,
    id: 15,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Acacia',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 16,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Bamboo',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 17,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Ironwood',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 18,
  },

  {
    coreId: 'xxxxx',
    roomName: 'A',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 19,
  },

  {
    coreId: 'xxxxx',
    roomName: 'H',
    particleId: 'tc-xx',
    isAssigned: false,
    id: 19,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Keynote',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 20,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Empress',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 21,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Ebony',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 22,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Guava',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 23,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Tamboti',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 24,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Mangrove',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 25,
  },

  {
    coreId: 'xxxxx',
    roomName: 'Open Spaces',
    particleId: 'tc-xx',
    isAssigned: true,
    id: 26,
  },
];

export { deviceIdToRoomId, roomMappings };
