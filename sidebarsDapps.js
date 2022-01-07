module.exports = {
  dapps: [
    {
      type: 'category',
      label: 'DApps Documentation',
      link: {
        type: 'generated-index',
        title: 'Dapps Documentation',
        description: 'Learn more about how the Giveth Dapp works. We have a variety of articles tailored for Users and Developers for Giveth.io, Giveth TRACE and the GIVeconomy.',
        slug: 'dapps/'
      },
      items:[
    {
      type: 'category',
      label: 'User Guides',
      collapsed: true,
      items: [{
        type: 'category',
        label: 'Giveth.io',
        collapsed: true,
        link: {type: 'doc', id: 'givethIO'},
        items: ['gettingStarted','crypto','createproject','listedUnlisted','makeTraceableProject','projectdonating' ,{
           type: 'category',
           label: 'Wallets',
           items: ['torusUserGuide', 'torusonramp', 'donatingmetamask'],
         },
          'troubleshooting','faq'],
       },{
        type: 'category',
        label: 'Giveth TRACE',
        link: {type: 'doc', id:'introTrace'},
        items: [ 'entitiesAndRoles','leavingTraces', 'technicalWhitePaper', 'exchangeRates', 'traceContracts' ]
         },
        { type: 'category',
          label: 'GIVeconomy',
          link: {type: 'doc', id: 'giveconomy'},
          items: [ 'givdrop', 'givbacks','givstream', 'givgarden' , 'givfarm'
]
          }
        ]

    },
    {
     type: 'category',
     label: "Developer Guides",
     items: [ {
       type: 'category',
       label: 'Giveth.io',
       items: ['givethioinstallation','contributors', 'testing-guidelines', 'dev-guidelines']
     }, {
       type: 'category',
       label: "Giveth TRACE",
       items: ['TRACEinstallation','bridgeSecurity', 'leavingTraces', 'developmentProcess']
     },
    // {
    //   type: 'category',
    //   label: 'GIVeconomy',
    //   items: []
    // }
  ]
   },
   //     {
   //     type : 'category',
   //     label : 'User Guides',
   //     items : ['gettingStarted', 'crypto',  'createproject','listedUnlisted' ,'makeTraceableProject','projectdonating',
   //     {
   //       type: 'category',
   //       label: 'Wallets',
   //       items: ['torusUserGuide', 'torusonramp', 'donatingmetamask'],
   //     },
   //      'troubleshooting','faq'],
   //   },
   //   {
   //     type : 'category',
   //     label: 'Developer Documentation',
   //     items : ['givethioinstallation','contributors', 'testing-guidelines', 'dev-guidelines',
   //     ],
   //   },
   // {
   //  type: 'category',
   //  label: 'Giveth TRACE',
   //  items: [ 'introTrace','TRACEinstallation', 'entitiesAndRoles',
   //    {
   //      type: 'category',
   //      label: 'DApp Documentation',
   //      items: ['bridgeSecurity', 'leavingTraces', 'developmentProcess'],
   //    },
   //      {
   //        type: 'category',
   //        label: 'Reference',
   //        items: ['technicalWhitePaper', 'exchangeRates', 'traceContracts']
   //       },
   //     ],
   //   },
   ],

 },
]
 }
