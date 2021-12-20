(this["webpackJsonpthefront-ts--react-scripts"]=this["webpackJsonpthefront-ts--react-scripts"]||[]).push([[9],{722:function(e,o,a){"use strict";a.r(o),a.d(o,"default",(function(){return b}));var n=a(1),t=a(0),i=(a(2),a(691)),s=a(657),c=a(6),r=a(149),l=a(4),d=[{name:"badgeColor",type:"string",default:"",description:"Badge color of the job card"},{name:"badgeTitle",type:"string",default:"",description:"Badge title of the job card"},{name:"companyLogo",type:"string",default:"",description:"Company logo of the card"},{name:"companyName",type:"string",default:"",description:"Company name of the card"},{name:"jobDate",type:"string",default:"",description:"Job date of the card"},{name:"jobLocation",type:"string",default:"",description:"Job location of the card"},{name:"jobTitle",type:"string",default:"",description:"Job title of the card"},{name:"jobType",type:"string",default:"",description:"Job type of the card"},{name:"className",type:"string",default:"",description:"External classes"}],b=function(e){var o=Object.assign({},e);return Object(t.jsxs)("div",Object(n.a)(Object(n.a)({},o),{},{children:[Object(t.jsx)(r.e,{title:"Description",gutterBottom:!0,children:Object(t.jsx)(r.b,{title:"CardJob",path:"src/components/organisms/CardJob/CardJob.js",description:"Component to display the job card"})}),Object(t.jsx)(r.e,{title:"Import",gutterBottom:!0,children:Object(t.jsx)(r.a,{code:"\nimport { CardJob } from 'components/organisms';\n// or\nimport CardJob from 'components/organisms/CardJob';\n"})}),Object(t.jsx)(r.e,{title:"Props & Methods",gutterBottom:!0,children:Object(t.jsx)(r.d,{dataProperties:d})}),Object(t.jsx)(r.e,{title:"Basic Example",gutterBottom:!0,children:Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(t.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"1000px",children:Object(t.jsxs)(s.a,{container:!0,spacing:2,children:[Object(t.jsx)(s.a,{item:!0,xs:4,children:Object(t.jsx)(l.e,{jobTitle:"Senior Developer",badgeColor:c.a.red[500],badgeTitle:"tech",jobLocation:"Milan, Italy",jobType:"Full Time",jobDate:"2 days ago",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg"})}),Object(t.jsx)(s.a,{item:!0,xs:4,children:Object(t.jsx)(l.e,{jobTitle:"Web designer internship",badgeColor:c.a.blue[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time",jobDate:"2 days ago",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg"})}),Object(t.jsx)(s.a,{item:!0,xs:4,children:Object(t.jsx)(l.e,{jobTitle:"UI/UX Designer",badgeColor:c.a.green[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time",jobDate:"2 days ago",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg"})})]})})}),Object(t.jsx)(r.a,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid } from \'@material-ui/core\';\nimport { CardJob } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardJob\n            jobTitle="Senior Developer"\n            badgeColor={colors.red[500]}\n            badgeTitle="tech"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJob\n            jobTitle="Web designer internship"\n            badgeColor={colors.blue[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJob\n            jobTitle="UI/UX Designer"\n            badgeColor={colors.green[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(t.jsx)(r.e,{title:"Outlined",gutterBottom:!0,children:Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(t.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"1000px",children:Object(t.jsxs)(s.a,{container:!0,spacing:2,children:[Object(t.jsx)(s.a,{item:!0,xs:4,children:Object(t.jsx)(l.e,{jobTitle:"Senior Developer",badgeColor:c.a.red[500],badgeTitle:"tech",jobLocation:"Milan, Italy",jobType:"Full Time",jobDate:"2 days ago",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",variant:"outlined"})}),Object(t.jsx)(s.a,{item:!0,xs:4,children:Object(t.jsx)(l.e,{jobTitle:"Web designer internship",badgeColor:c.a.blue[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time",jobDate:"2 days ago",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",variant:"outlined"})}),Object(t.jsx)(s.a,{item:!0,xs:4,children:Object(t.jsx)(l.e,{jobTitle:"UI/UX Designer",badgeColor:c.a.green[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time",jobDate:"2 days ago",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",variant:"outlined"})})]})})}),Object(t.jsx)(r.a,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid } from \'@material-ui/core\';\nimport { CardJob } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardJob\n            jobTitle="Senior Developer"\n            badgeColor={colors.red[500]}\n            badgeTitle="tech"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJob\n            jobTitle="Web designer internship"\n            badgeColor={colors.blue[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJob\n            jobTitle="UI/UX Designer"\n            badgeColor={colors.green[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            variant="outlined"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(t.jsx)(r.e,{title:"Custom Shadow and LiftUp Effect",gutterBottom:!0,children:Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(i.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(t.jsx)(i.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"1000px",children:Object(t.jsxs)(s.a,{container:!0,spacing:2,children:[Object(t.jsx)(s.a,{item:!0,xs:4,children:Object(t.jsx)(l.e,{jobTitle:"Senior Developer",badgeColor:c.a.red[500],badgeTitle:"tech",jobLocation:"Milan, Italy",jobType:"Full Time",jobDate:"2 days ago",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",withShadow:!0,liftUp:!0})}),Object(t.jsx)(s.a,{item:!0,xs:4,children:Object(t.jsx)(l.e,{jobTitle:"Web designer internship",badgeColor:c.a.blue[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time",jobDate:"2 days ago",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",withShadow:!0,liftUp:!0})}),Object(t.jsx)(s.a,{item:!0,xs:4,children:Object(t.jsx)(l.e,{jobTitle:"UI/UX Designer",badgeColor:c.a.green[500],badgeTitle:"web design",jobLocation:"Milan, Italy",jobType:"Full Time",jobDate:"2 days ago",companyName:"Slack",companyLogo:"https://assets.maccarianagency.com/the-front/logos/slack.svg",withShadow:!0,liftUp:!0})})]})})}),Object(t.jsx)(r.a,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid } from \'@material-ui/core\';\nimport { CardJob } from \'components/organisms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} display="flex" justifyContent="space-evenly" alignItems="center" padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardJob\n            jobTitle="Senior Developer"\n            badgeColor={colors.red[500]}\n            badgeTitle="tech"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJob\n            jobTitle="Web designer internship"\n            badgeColor={colors.blue[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardJob\n            jobTitle="UI/UX Designer"\n            badgeColor={colors.green[500]}\n            badgeTitle="web design"\n            jobLocation="Milan, Italy"\n            jobType="Full Time"\n            jobDate="2 days ago"\n            companyName="Slack"\n            companyLogo="https://assets.maccarianagency.com/the-front/logos/slack.svg"\n            withShadow\n            liftUp\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);