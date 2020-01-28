export const themedExample = `
class ColorInputWithState extends React.Component {
  state = {
    value: 0,
    theme: 'standard',
    options: [
      { id: 0, value: 'standard', palette: '#2B81CB' },
      { id: 1, value: 'reds', palette: '#D6453D' },
      { id: 2, value: 'greens', palette: '#44823F' },
    ],
  };

  onSelect = value => {
    this.setState({ value: value.id });
    this.setState({ theme: value.value });
  };

  render() {
    const { value, options, theme } = this.state;
    return (
      <Layout gap="50px">
        <Row>
          <FormField label="Theme">
            <Dropdown
              selectedId={value}
              options={options}
              onSelect={this.onSelect}
            />
          </FormField>

          <Box marginTop={4} marginBottom={4}>
            <Divider />
          </Box>

          <Text>A pre-made theme includes all sort of properties, like colors, borders styles, etc.</Text>
        </Row>
        <Row>
          <Theme theme={theme}>
            <GallerySidepanel palette={Object.values(calc_theme(options[value].palette))}/>
          </Theme>
        </Row>
      </Layout>
    );
  }
}
`;

export const customExample = `
class ColorInputWithState extends React.Component {
  state = {
    color: '#FF0000',
    radius: 20,
  };

  change = color => this.setState({ color });

  render() {
    const { color, radius } = this.state;
    return (
      <Layout gap="50px">
        <Row>
          <Text>Custom theme</Text>

          <Divider />

          <Box marginTop={4}>
            <FormField label="Colors">
              <ColorInput value={color} onChange={this.change} />
            </FormField>
          </Box>

          <Box marginTop={4} direction="vertical">
            <FormField label="Border radius">
              <Slider
                onChange={radius => this.setState({ radius })}
                min={0}
                max={100}
                value={radius}
                displayMarks={false}
              />
            </FormField>
          </Box>
        </Row>
        <Row>
          <Theme custom={{color, radius}}>
            <GallerySidepanel palette={Object.values(calc_theme(color))}/>
          </Theme>
        </Row>
      </Layout>
    );
  }
}
`;