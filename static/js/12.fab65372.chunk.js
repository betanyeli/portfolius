(this["webpackJsonpthefront-ts--react-scripts"]=this["webpackJsonpthefront-ts--react-scripts"]||[]).push([[12],{726:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var i=t(1),o=t(0),r=(t(2),t(691)),a=t(657),c=t(69),s=t(6),l=t(662),d=t(149),p=t(4),u=t(9),m=[{name:"cta",type:"node",default:"",description:"CTA button of the pricing card"},{name:"priceComponent",type:"node",default:"",description:"The pricing component of the pricing card"},{name:"title",type:"string",default:"",description:"Title of the pricing card"},{name:"disclaimer",type:"string",default:"",description:"Diclaimer of the pricing card"},{name:"disclaimerProps",type:"object",default:"",description:"Additional props to pass to the disclaimer Typography component"},{name:"featureCheckComponent",type:"node",default:"",description:"The features check component of the pricing card"},{name:"featureTitleProps",type:"object",default:"",description:"Additional props to pass to the feature title Typography component"},{name:"features",type:"array",default:"",description:"Features array of the pricing card"},{name:"subtitle",type:"string",default:"",description:"Subtitle of the pricing card"},{name:"subtitleProps",type:"object",default:"",description:"Additional props to pass to the subtitle Typography component"},{name:"titleProps",type:"object",default:"",description:"Additional props to pass to the title Typography component"},{name:"className",type:"string",default:"",description:"External classes"}],f=function(e){var n=Object.assign({},e);return Object(o.jsxs)("div",Object(i.a)(Object(i.a)({},n),{},{children:[Object(o.jsx)(d.e,{title:"Description",gutterBottom:!0,children:Object(o.jsx)(d.b,{title:"CardPricingStandard",path:"src/components/organisms/CardPricingStandard/CardPricingStandard.js",description:"Component to display the pricing card"})}),Object(o.jsx)(d.e,{title:"Import",gutterBottom:!0,children:Object(o.jsx)(d.a,{code:"\nimport { CardPricingStandard } from 'components/organisms';\n// or\nimport CardPricingStandard from 'components/organisms/CardPricingStandard';\n"})}),Object(o.jsx)(d.e,{title:"Props & Methods",gutterBottom:!0,children:Object(o.jsx)(d.d,{dataProperties:m})}),Object(o.jsx)(d.e,{title:"Basic Example",gutterBottom:!0,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(o.jsx)(r.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"900px",children:Object(o.jsxs)(a.a,{container:!0,spacing:2,children:[Object(o.jsx)(a.a,{item:!0,xs:4,children:Object(o.jsx)(p.i,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),Object(o.jsx)(c.a,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:Object(o.jsx)(u.b,{fontIconClass:"far fa-check-circle",fontIconColor:s.a.indigo[500]}),cta:Object(o.jsx)(l.a,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial"})}),Object(o.jsx)(a.a,{item:!0,xs:4,children:Object(o.jsx)(p.i,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),Object(o.jsx)(c.a,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:Object(o.jsx)(u.b,{fontIconClass:"far fa-check-circle",fontIconColor:s.a.indigo[500]}),cta:Object(o.jsx)(l.a,{color:"primary",variant:"contained",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial"})}),Object(o.jsx)(a.a,{item:!0,xs:4,children:Object(o.jsx)(p.i,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),Object(o.jsx)(c.a,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:Object(o.jsx)(u.b,{fontIconClass:"far fa-check-circle",fontIconColor:s.a.indigo[500]}),cta:Object(o.jsx)(l.a,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial"})})]})})}),Object(o.jsx)(d.a,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid, Button, Typography } from \'@material-ui/core\';\nimport { CardPricingStandard } from \'components/organisms\';\nimport { Icon } from \'components/atoms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(o.jsx)(d.e,{title:"Outlined",gutterBottom:!0,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(o.jsx)(r.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"900px",children:Object(o.jsxs)(a.a,{container:!0,spacing:2,children:[Object(o.jsx)(a.a,{item:!0,xs:4,children:Object(o.jsx)(p.i,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),Object(o.jsx)(c.a,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:Object(o.jsx)(u.b,{fontIconClass:"far fa-check-circle",fontIconColor:s.a.indigo[500]}),cta:Object(o.jsx)(l.a,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",variant:"outlined"})}),Object(o.jsx)(a.a,{item:!0,xs:4,children:Object(o.jsx)(p.i,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),Object(o.jsx)(c.a,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:Object(o.jsx)(u.b,{fontIconClass:"far fa-check-circle",fontIconColor:s.a.indigo[500]}),cta:Object(o.jsx)(l.a,{color:"primary",variant:"contained",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",variant:"outlined"})}),Object(o.jsx)(a.a,{item:!0,xs:4,children:Object(o.jsx)(p.i,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),Object(o.jsx)(c.a,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:Object(o.jsx)(u.b,{fontIconClass:"far fa-check-circle",fontIconColor:s.a.indigo[500]}),cta:Object(o.jsx)(l.a,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",variant:"outlined"})})]})})}),Object(o.jsx)(d.a,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid, Button, Typography } from \'@material-ui/core\';\nimport { CardPricingStandard } from \'components/organisms\';\nimport { Icon } from \'components/atoms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            variant="outlined"\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            variant="outlined"\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})}),Object(o.jsx)(d.e,{title:"Custom Shadow and LiftUp Effect",gutterBottom:!0,children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",overflow:"auto",children:Object(o.jsx)(r.a,{display:"flex",justifyContent:"space-around",alignItems:"center",minWidth:"900px",children:Object(o.jsxs)(a.a,{container:!0,spacing:2,children:[Object(o.jsx)(a.a,{item:!0,xs:4,children:Object(o.jsx)(p.i,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),Object(o.jsx)(c.a,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:Object(o.jsx)(u.b,{fontIconClass:"far fa-check-circle",fontIconColor:s.a.indigo[500]}),cta:Object(o.jsx)(l.a,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",withShadow:!0,liftUp:!0})}),Object(o.jsx)(a.a,{item:!0,xs:4,children:Object(o.jsx)(p.i,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),Object(o.jsx)(c.a,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:Object(o.jsx)(u.b,{fontIconClass:"far fa-check-circle",fontIconColor:s.a.indigo[500]}),cta:Object(o.jsx)(l.a,{color:"primary",variant:"contained",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",withShadow:!0,liftUp:!0})}),Object(o.jsx)(a.a,{item:!0,xs:4,children:Object(o.jsx)(p.i,{title:"Extended License",subtitle:"A pay-once license, just for you",priceComponent:Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,{variant:"h3",component:"span",style:{fontWeight:900},children:"$79"}),Object(o.jsx)(c.a,{component:"span",variant:"subtitle1",children:"/ MO"})]}),features:["Rich, responsive landing pages","100+ styled components","Flexible, simple license","Speedy build tooling","6 months free support included"],featureCheckComponent:Object(o.jsx)(u.b,{fontIconClass:"far fa-check-circle",fontIconColor:s.a.indigo[500]}),cta:Object(o.jsx)(l.a,{color:"primary",variant:"outlined",fullWidth:!0,size:"large",children:"Subscribe now"}),disclaimer:"Fully featured 30-day free trial",withShadow:!0,liftUp:!0})})]})})}),Object(o.jsx)(d.a,{code:'\nimport React from \'react\';\nimport { Box, colors, Grid, Button, Typography } from \'@material-ui/core\';\nimport { CardPricingStandard } from \'components/organisms\';\nimport { Icon } from \'components/atoms\';\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border="1px solid #ccc" borderRadius="4px">\n      <Grid container spacing={2}>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="contained" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            withShadow\n            liftUp\n          />\n        </Grid>\n        <Grid item xs={4}>\n          <CardPricingStandard\n            title="Extended License"\n            subtitle="A pay-once license, just for you"\n            priceComponent={(\n                <div>\n                    <Typography variant="h3" component="span" style={{ fontWeight: 900 }}>$79</Typography>\n                    <Typography component="span" variant="subtitle1">/ MO</Typography>\n                </div>\n            )}\n            features={[\'Rich, responsive landing pages\', \'100+ styled components\', \'Flexible, simple license\', \'Speedy build tooling\', \'6 months free support included\']}\n            featureCheckComponent={<Icon fontIconClass="far fa-check-circle" fontIconColor={colors.indigo[500]} />}\n            cta={(<Button color="primary" variant="outlined" fullWidth size="large">Subscribe now</Button>)}\n            disclaimer="Fully featured 30-day free trial"\n            withShadow\n            liftUp\n          />\n        </Grid>\n      </Grid>\n    </Box>\n  );\n}\n'})]})})]}))}}}]);