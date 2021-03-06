import React from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'
import moment from 'react-moment';

const GridExampleEqualWidthRow = () => (
  <Container>
    <Grid columns='equal'>
      <Grid.Row>
        <Grid.Column>
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>2</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>3</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>4</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>2</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>3</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>2</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
)

export default GridExampleEqualWidthRow
