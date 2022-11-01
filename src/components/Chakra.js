import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

function Chakra() {
  return (
    <div>
        <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
  m={100}
  >
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Header
  </GridItem>
  <GridItem pl='2' backgroundImage="url('https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/color-chartreuse/color-chartreuse_fb-img_1200x800.jpg')"  area={'nav'} color ={'white'}>
    Nav
  </GridItem>
  <GridItem pl='2' backgroundImage="url('https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/is-black-a-color/desktop/is-black-a-color_P3_720x350.jpg.img.jpg')" area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' backgroundImage="url('https://www.cliffordchance.com/content/dam/cliffordchance/header/expertise/esg/header-climate-changes.jpg')" area={'footer'}>
    Footer
  </GridItem>
  </Grid>
    </div>
  )
}

export default Chakra