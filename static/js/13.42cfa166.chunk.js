(this["webpackJsonpthefront-ts--react-scripts"]=this["webpackJsonpthefront-ts--react-scripts"]||[]).push([[13],{727:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return h}));var a=e(1),r=e(0),o=(e(2),e(691)),i=e(69),c=e(657),s=e(149),d=e(4),p=e(5),l=[{name:"cardContent",type:"any",default:"",description:"The Card content"},{name:"mediaContent",type:"any",default:"",description:"The Card Media content"},{name:"align",type:"enum",default:"left",description:"The content alignment. One of: left, right, center"},{name:"liftUp",type:"bool",default:"",description:"Whether to lift up on hover"},{name:"mediaClassName",type:"string",default:"",description:"External classes for the media"},{name:"noBg",type:"bool",default:"",description:"Whether to show transparent background"},{name:"noBorder",type:"bool",default:"",description:"Whether to hide the card borders"},{name:"noShadow",type:"bool",default:"",description:"Whether to render the card without shadow"},{name:"withShadow",type:"bool",default:"",description:"Whether to show custom shadow"},{name:"className",type:"string",default:"",description:"External classes"}],m={images:[{src:"https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg",alt:""},{src:"https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg",alt:""},{src:"https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg",alt:""}],title:"Tenoha Space",address:"Via E. Gola 4, 20147 Milan, Italy",price:"$980 / month"},h=function(t){var n=Object.assign({},t);return Object(r.jsxs)("div",Object(a.a)(Object(a.a)({},n),{},{children:[Object(r.jsx)(s.e,{title:"Description",gutterBottom:!0,children:Object(r.jsx)(s.b,{title:"CardProduct",path:"src/components/organisms/CardProduct/CardProduct.js",description:"Component to display the product card"})}),Object(r.jsx)(s.e,{title:"Import",gutterBottom:!0,children:Object(r.jsx)(s.a,{code:"\nimport { CardProduct } from 'components/organisms';\n// or\nimport CardProduct from 'components/organisms/CardProduct';\n"})}),Object(r.jsx)(s.e,{title:"Props & Methods",gutterBottom:!0,children:Object(r.jsx)(s.d,{dataProperties:l})}),Object(r.jsx)(s.e,{title:"Basic Example",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(d.j,{style:{maxWidth:500},mediaContent:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.f,{items:m.images}),Object(r.jsx)("div",{style:{position:"absolute",left:8,bottom:16,zIndex:9,background:"white",padding:"4px 8px",borderRadius:"8px"},children:Object(r.jsx)(i.a,{variant:"body1",color:"primary",children:m.price})})]}),cardContent:Object(r.jsxs)(c.a,{container:!0,spacing:1,children:[Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(i.a,{variant:"h6",color:"textPrimary",align:"left",children:m.title})}),Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(i.a,{variant:"body1",color:"textSecondary",align:"left",children:m.address})})]})})}),Object(r.jsx)(s.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography } from '@material-ui/core';\nimport { CardProduct } from 'components/organisms';\nimport { SwiperImage } from 'components/molecules';\n\nconst item = {\n  images: [{\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',\n      alt: '', \n  }, {\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',\n      alt: '', \n  }, {\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',\n      alt: '', \n  }],\n  title: 'Tenoha Space',\n  address: 'Via E. Gola 4, 20147 Milan, Italy',\n  price: '$980 / month',\n};\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <CardProduct\n        style={{ maxWidth: 500 }}\n        mediaContent={(\n          <>\n            <SwiperImage\n              items={item.images}\n            />\n            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>\n              <Typography variant=\"body1\" color=\"primary\">\n                {item.price}\n              </Typography>\n            </div>\n          </>\n        )}\n        cardContent={(\n          <Grid container spacing={1}>\n            <Grid item xs={12}>\n              <Typography variant=\"h6\" color=\"textPrimary\" align=\"left\">\n                {item.title}\n              </Typography>\n            </Grid>\n            <Grid item xs={12}>\n              <Typography variant=\"body1\" color=\"textSecondary\" align=\"left\">{item.address}</Typography>\n            </Grid>\n          </Grid>\n        )}\n      />\n    </Box>\n  );\n}\n"})]})}),Object(r.jsx)(s.e,{title:"Custom Shadow Example",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(d.j,{withShadow:!0,style:{maxWidth:500},mediaContent:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.f,{items:m.images}),Object(r.jsx)("div",{style:{position:"absolute",left:8,bottom:16,zIndex:9,background:"white",padding:"4px 8px",borderRadius:"8px"},children:Object(r.jsx)(i.a,{variant:"body1",color:"primary",children:m.price})})]}),cardContent:Object(r.jsxs)(c.a,{container:!0,spacing:1,children:[Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(i.a,{variant:"h6",color:"textPrimary",align:"left",children:m.title})}),Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(i.a,{variant:"body1",color:"textSecondary",align:"left",children:m.address})})]})})}),Object(r.jsx)(s.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography } from '@material-ui/core';\nimport { CardProduct } from 'components/organisms';\nimport { SwiperImage } from 'components/molecules';\n\nconst item = {\n  images: [{\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',\n      alt: '', \n  }, {\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',\n      alt: '', \n  }, {\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',\n      alt: '', \n  }],\n  title: 'Tenoha Space',\n  address: 'Via E. Gola 4, 20147 Milan, Italy',\n  price: '$980 / month',\n};\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <CardProduct\n        withShadow\n        style={{ maxWidth: 500 }}\n        mediaContent={(\n          <>\n            <SwiperImage\n              items={item.images}\n            />\n            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>\n              <Typography variant=\"body1\" color=\"primary\">\n                {item.price}\n              </Typography>\n            </div>\n          </>\n        )}\n        cardContent={(\n          <Grid container spacing={1}>\n            <Grid item xs={12}>\n              <Typography variant=\"h6\" color=\"textPrimary\" align=\"left\">\n                {item.title}\n              </Typography>\n            </Grid>\n            <Grid item xs={12}>\n              <Typography variant=\"body1\" color=\"textSecondary\" align=\"left\">{item.address}</Typography>\n            </Grid>\n          </Grid>\n        )}\n      />\n    </Box>\n  );\n}\n"})]})}),Object(r.jsx)(s.e,{title:"LiftUp Effect Example",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(d.j,{withShadow:!0,liftUp:!0,style:{maxWidth:500},mediaContent:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.f,{items:m.images}),Object(r.jsx)("div",{style:{position:"absolute",left:8,bottom:16,zIndex:9,background:"white",padding:"4px 8px",borderRadius:"8px"},children:Object(r.jsx)(i.a,{variant:"body1",color:"primary",children:m.price})})]}),cardContent:Object(r.jsxs)(c.a,{container:!0,spacing:1,children:[Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(i.a,{variant:"h6",color:"textPrimary",align:"left",children:m.title})}),Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(i.a,{variant:"body1",color:"textSecondary",align:"left",children:m.address})})]})})}),Object(r.jsx)(s.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography } from '@material-ui/core';\nimport { CardProduct } from 'components/organisms';\nimport { SwiperImage } from 'components/molecules';\n\nconst item = {\n  images: [{\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',\n      alt: '', \n  }, {\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',\n      alt: '', \n  }, {\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',\n      alt: '', \n  }],\n  title: 'Tenoha Space',\n  address: 'Via E. Gola 4, 20147 Milan, Italy',\n  price: '$980 / month',\n};\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <CardProduct\n        withShadow\n        liftUp\n        style={{ maxWidth: 500 }}\n        mediaContent={(\n          <>\n            <SwiperImage\n              items={item.images}\n            />\n            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>\n              <Typography variant=\"body1\" color=\"primary\">\n                {item.price}\n              </Typography>\n            </div>\n          </>\n        )}\n        cardContent={(\n          <Grid container spacing={1}>\n            <Grid item xs={12}>\n              <Typography variant=\"h6\" color=\"textPrimary\" align=\"left\">\n                {item.title}\n              </Typography>\n            </Grid>\n            <Grid item xs={12}>\n              <Typography variant=\"body1\" color=\"textSecondary\" align=\"left\">{item.address}</Typography>\n            </Grid>\n          </Grid>\n        )}\n      />\n    </Box>\n  );\n}\n"})]})}),Object(r.jsx)(s.e,{title:"Basic Card with No Border and No Shadow Example",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(d.j,{noBorder:!0,noShadow:!0,style:{maxWidth:500},mediaContent:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.f,{items:m.images}),Object(r.jsx)("div",{style:{position:"absolute",left:8,bottom:16,zIndex:9,background:"white",padding:"4px 8px",borderRadius:"8px"},children:Object(r.jsx)(i.a,{variant:"body1",color:"primary",children:m.price})})]}),cardContent:Object(r.jsxs)(c.a,{container:!0,spacing:1,children:[Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(i.a,{variant:"h6",color:"textPrimary",align:"left",children:m.title})}),Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(i.a,{variant:"body1",color:"textSecondary",align:"left",children:m.address})})]})})}),Object(r.jsx)(s.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography } from '@material-ui/core';\nimport { CardProduct } from 'components/organisms';\nimport { SwiperImage } from 'components/molecules';\n\nconst item = {\n  images: [{\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',\n      alt: '', \n  }, {\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',\n      alt: '', \n  }, {\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',\n      alt: '', \n  }],\n  title: 'Tenoha Space',\n  address: 'Via E. Gola 4, 20147 Milan, Italy',\n  price: '$980 / month',\n};\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <CardProduct\n        noBorder\n        noShadow\n        style={{ maxWidth: 500 }}\n        mediaContent={(\n          <>\n            <SwiperImage\n              items={item.images}\n            />\n            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>\n              <Typography variant=\"body1\" color=\"primary\">\n                {item.price}\n              </Typography>\n            </div>\n          </>\n        )}\n        cardContent={(\n          <Grid container spacing={1}>\n            <Grid item xs={12}>\n              <Typography variant=\"h6\" color=\"textPrimary\" align=\"left\">\n                {item.title}\n              </Typography>\n            </Grid>\n            <Grid item xs={12}>\n              <Typography variant=\"body1\" color=\"textSecondary\" align=\"left\">{item.address}</Typography>\n            </Grid>\n          </Grid>\n        )}\n      />\n    </Box>\n  );\n}\n"})]})}),Object(r.jsx)(s.e,{title:"Basic Card with Outlined Effect",gutterBottom:!0,children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{marginBottom:2,padding:2,border:"1px solid #ccc",borderRadius:"4px",children:Object(r.jsx)(d.j,{variant:"outlined",style:{maxWidth:500},mediaContent:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(p.f,{items:m.images}),Object(r.jsx)("div",{style:{position:"absolute",left:8,bottom:16,zIndex:9,background:"white",padding:"4px 8px",borderRadius:"8px"},children:Object(r.jsx)(i.a,{variant:"body1",color:"primary",children:m.price})})]}),cardContent:Object(r.jsxs)(c.a,{container:!0,spacing:1,children:[Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(i.a,{variant:"h6",color:"textPrimary",align:"left",children:m.title})}),Object(r.jsx)(c.a,{item:!0,xs:12,children:Object(r.jsx)(i.a,{variant:"body1",color:"textSecondary",align:"left",children:m.address})})]})})}),Object(r.jsx)(s.a,{code:"\nimport React from 'react';\nimport { Box, Grid, Typography } from '@material-ui/core';\nimport { CardProduct } from 'components/organisms';\nimport { SwiperImage } from 'components/molecules';\n\nconst item = {\n  images: [{\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',\n      alt: '', \n  }, {\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',\n      alt: '', \n  }, {\n      src: 'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',\n      alt: '', \n  }],\n  title: 'Tenoha Space',\n  address: 'Via E. Gola 4, 20147 Milan, Italy',\n  price: '$980 / month',\n};\n\nexport default function Example() {\n  return (\n    <Box marginBottom={2} padding={2} border=\"1px solid #ccc\" borderRadius=\"4px\">\n      <CardProduct\n        variant=\"outlined\"\n        style={{ maxWidth: 500 }}\n        mediaContent={(\n          <>\n            <SwiperImage\n              items={item.images}\n            />\n            <div style={{ position: 'absolute', left: 8, bottom: 16, zIndex: 9, background: 'white', padding: '4px 8px', borderRadius: '8px' }}>\n              <Typography variant=\"body1\" color=\"primary\">\n                {item.price}\n              </Typography>\n            </div>\n          </>\n        )}\n        cardContent={(\n          <Grid container spacing={1}>\n            <Grid item xs={12}>\n              <Typography variant=\"h6\" color=\"textPrimary\" align=\"left\">\n                {item.title}\n              </Typography>\n            </Grid>\n            <Grid item xs={12}>\n              <Typography variant=\"body1\" color=\"textSecondary\" align=\"left\">{item.address}</Typography>\n            </Grid>\n          </Grid>\n        )}\n      />\n    </Box>\n  );\n}\n"})]})})]}))}}}]);