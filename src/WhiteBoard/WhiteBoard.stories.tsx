import {
  Button,
  Input,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import WhiteBoard from '.';

export default {
  component: WhiteBoard,
  title: 'WhiteBoard',
} as ComponentMeta<typeof WhiteBoard>;

const { Col, Row } = WhiteBoard;

const Template: ComponentStory<typeof WhiteBoard> = (args) => (
  <WhiteBoard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <Row>
      <Col>
        <InputLabel sx={{ textAlign: 'center', width: 120 }}>Search</InputLabel>
        <Col>
          <Input placeholder="..." sx={{ width: 240 }} />
          <Button variant="contained" disableElevation>
            SUBMIT
          </Button>
          <Button variant="outlined" disableElevation>
            RESET
          </Button>
        </Col>
      </Col>
    </Row>
  ),
};

export const CustomMaxWidth = Template.bind({});
CustomMaxWidth.args = {
  children: (
    <Row>
      <Col>
        <InputLabel sx={{ textAlign: 'center', width: 120 }}>Search</InputLabel>
        <Col>
          <Input placeholder="..." sx={{ width: 240 }} />
          <Button variant="contained" disableElevation>
            SUBMIT
          </Button>
          <Button variant="outlined" disableElevation>
            RESET
          </Button>
        </Col>
      </Col>
    </Row>
  ),
  maxWidth: 800,
};

export const WithInputs = Template.bind({});

WithInputs.args = {
  children: (
    <>
      <Row>
        <Col>
          <InputLabel sx={{ textAlign: 'center', width: 120 }}>AAA</InputLabel>
          <Select
            defaultValue=""
            sx={{ height: 40, minWidth: 120 }}
            displayEmpty
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={1}>a</MenuItem>
            <MenuItem value={2}>b</MenuItem>
            <MenuItem value={3}>c</MenuItem>
            <MenuItem value={4}>d</MenuItem>
            <MenuItem value={5}>e</MenuItem>
            <MenuItem value={6}>f</MenuItem>
          </Select>
        </Col>
        <Col>
          <InputLabel sx={{ textAlign: 'center', width: 120 }}>BBB</InputLabel>
          <Select
            defaultValue=""
            sx={{ height: 40, minWidth: 120 }}
            displayEmpty
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={1}>a</MenuItem>
            <MenuItem value={2}>b</MenuItem>
            <MenuItem value={3}>c</MenuItem>
            <MenuItem value={4}>d</MenuItem>
            <MenuItem value={5}>e</MenuItem>
            <MenuItem value={6}>f</MenuItem>
          </Select>
        </Col>
        <Col>
          <InputLabel sx={{ textAlign: 'center', width: 120 }}>CCC</InputLabel>
          <Select
            defaultValue=""
            sx={{ height: 40, minWidth: 120 }}
            displayEmpty
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={1}>a</MenuItem>
            <MenuItem value={2}>b</MenuItem>
            <MenuItem value={3}>c</MenuItem>
            <MenuItem value={4}>d</MenuItem>
            <MenuItem value={5}>e</MenuItem>
            <MenuItem value={6}>f</MenuItem>
          </Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputLabel sx={{ textAlign: 'center', width: 120 }}>DDD</InputLabel>
          <Select
            defaultValue=""
            sx={{ height: 40, minWidth: 120 }}
            displayEmpty
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={1}>a</MenuItem>
            <MenuItem value={2}>b</MenuItem>
            <MenuItem value={3}>c</MenuItem>
            <MenuItem value={4}>d</MenuItem>
            <MenuItem value={5}>e</MenuItem>
            <MenuItem value={6}>f</MenuItem>
          </Select>
        </Col>
        <Col>
          <InputLabel sx={{ textAlign: 'center', width: 120 }}>EEE</InputLabel>
          <Select
            defaultValue=""
            sx={{ height: 40, minWidth: 120 }}
            displayEmpty
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value={1}>a</MenuItem>
            <MenuItem value={2}>b</MenuItem>
            <MenuItem value={3}>c</MenuItem>
            <MenuItem value={4}>d</MenuItem>
            <MenuItem value={5}>e</MenuItem>
            <MenuItem value={6}>f</MenuItem>
          </Select>
        </Col>
      </Row>
      <Row>
        <Col flex={1}>
          <InputLabel sx={{ textAlign: 'center', width: 120 }}>FFF</InputLabel>
          <ToggleButtonGroup sx={{ flex: 1, height: 40 }}>
            <ToggleButton sx={{ flexBasis: 80 }} value="left">
              AAAA
            </ToggleButton>
            <ToggleButton sx={{ flexBasis: 80 }} value="center">
              BBBB
            </ToggleButton>
            <ToggleButton sx={{ flexBasis: 80 }} value="right">
              CCC
            </ToggleButton>
            <ToggleButton sx={{ flexBasis: 80 }} value="justify" disabled>
              DDD
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputLabel sx={{ textAlign: 'center', width: 120 }} />
          <Col>
            <Input placeholder="..." sx={{ width: 240 }} />
            <Button variant="contained" disableElevation>
              SUBMIT
            </Button>
            <Button variant="outlined" disableElevation>
              RESET
            </Button>
          </Col>
        </Col>
      </Row>
    </>
  ),
};
