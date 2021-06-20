module.exports = {
  dapps: [
    {
     type: 'category',
     label: "Giveth.io",
     items: [
       {
       type : 'category',
       label : 'User Guides',
       items : ['gettingstarted', 'crypto',  'createproject','projectdonating',
       {
         type: 'category',
         label: 'Wallets',
         items: ['torusUserGuide', 'torusonramp', 'donatingmetamask'],
       },
        'qualityscore', 'troubleshooting','faq'],
     },
     {
       type : 'category',
       label: 'Developer Documentation',
       items : ['givethioinstallation','contributors', 'testing-guidelines', 'dev-guidelines',
       ],
     },
       'styleguide',
     ],
   },
   {
    type: 'category',
    label: 'Giveth TRACE',
    items: [ 'introTrace', 'entitiesAndRoles',
      {
        type: 'category',
        label: 'DApp Documentation',
        items: ['bridgeSecurity', 'leavingTraces', 'developmentProcess'],
      },
        {
          type: 'category',
          label: 'Reference',
          items: ['technicalWhitePaper', 'exchangeRates', 'traceContracts']
         },
       ],
     },
   ],
 }
