module.exports = {
  dapps: [
    {
     type: 'category',
     label: "Giveth.io",
     items: [ 'givethIO',
       {
       type : 'category',
       label : 'User Guides',
       items : ['gettingStarted', 'crypto',  'createproject','listedUnlisted' ,'makeTraceableProject','projectdonating',
       {
         type: 'category',
         label: 'Wallets',
         items: ['torusUserGuide', 'torusonramp', 'donatingmetamask'],
       },
        'troubleshooting','faq'],
     },
     {
       type : 'category',
       label: 'Developer Documentation',
       items : ['givethioinstallation','contributors', 'testing-guidelines', 'dev-guidelines',
       ],
     }
     ],
   },
   {
    type: 'category',
    label: 'Giveth TRACE',
    items: [ 'introTrace','TRACEinstallation', 'entitiesAndRoles',
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
