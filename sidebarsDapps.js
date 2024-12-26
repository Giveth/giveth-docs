module.exports = {
  dapps: [
    {
      type: 'category',
      label: 'Giveth.io Guides',
      link: {
        type: 'generated-index',
        title: 'Giveth.io Guides',
        description: 'Learn more about how the Giveth Dapp works. We have a variety of articles tailored for Donors, Project Owners and how to use the GIV token.',
        slug: 'dapps/'
      },
      items:[
        'givethIO',
        'gettingStarted',
    {
        type: 'category',
        label: 'For Donors',
        collapsed: true,
        link: {type: 'doc', id: 'projectdonating'},
        items: ['projectdonating', 'donatingmetamask' ,'multisigs', 'importTorusMM'
          ],
       },
       {
        type: 'category',
        label: 'For Project Owners',
        collapsed: true,
        link: {type: 'doc', id: 'createproject'},
        items: ['createproject','listedUnlisted','projectVerification', 'projectUpdates', 
          ],
       },
        { type: 'category',
          label: 'GIVeconomy',
          link: {type: 'doc', id: 'giveconomy'},
          items: [  'givbacks', 'givstream', 'givpower',
          {
            type: 'category',
            label: 'GIVgarden',
            link: {type: 'doc', id: 'givgarden'},
            items:['termsForProposals']
          },
          {
            type: 'category',
            label: 'GIVfarm',
            link: {type: 'doc', id: 'givfarm'},
            items:['regenFarms']
          }
          , 'givdrop'
]
          },
          'recurringDonation','quadraticfunding','giverspfp'
        

    ,
    'disclosure',
    'troubleshooting',
  //   {
  //    type: 'category',
  //    label: "Developer Guides",
  //    items: [ 'contributors','givethioinstallation' , {
  //      type: 'category',
  //      label: "Giveth TRACE (Deprecated)",
  //      items: ['TRACEinstallation','bridgeSecurity', 'developmentProcess']
  //    },
  //    'regenFarmContracts'
  // ]
  //  },
   {
    type: 'category',
    label: 'Archives',
    items: [
      {
        type: 'category',
        label: 'Giveth TRACE (Deprecated)',
        link: {type: 'doc', id:'introTrace'},
        items: [ 'entitiesAndRoles','makeTraceableProject','leavingTraces', 'technicalWhitePaper', 'exchangeRates', 'traceContracts' ]
         },'niceToken', 'angelVault',

    ]
   },       
  
  
   ],

 },
]
 }