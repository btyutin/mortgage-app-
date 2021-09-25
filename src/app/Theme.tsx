export const AirportTheme = {
    colors: {
        'orange-bg': '#FFAC02',
        'input-bg': '#F5F4F2',

        black: '#072833',
        primary: '#170A4A',
        lightGray: '#FBFBFB',
        Grey: '#f6f6f6',
        darkGrey: '#B8B8B8'
    },
    fonts: {
        body: "Inter, Roboto Condensed, sans-serif",
        heading: "Inter, Roboto Condensed, sans-serif",
        link: "Inter, Roboto Condensed, sans-serif"
    },
    components: {
        Heading: {
            baseStyle: {
                color: 'black',

                fontSize: 22
            },
            sizes: {
                xl: {
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'black',
                }
            }
        },

        Progress: {
            baseStyle: {
                track: {bg: 'white'},
                filledTrack: {bg: '#FFAC02'}
            },

            variants: {
                black: {
                    track: {bg: 'black'},
                    filledTrack: {bg: '#FFAC02'}
                }
            }
        },
        Divider: {
            baseStyle: {
                height: '2px',
                width: '100%',
                bg: 'black',
                opacity: 1,
                position: 'relative',
                top: '4px'
            }
        },
        Tabs: {
            variants: {
                'contracts-list': {
                    tab: {
                        fontSize: '16px',
                        fontWeight: 500,
                        paddingInlineStart: 0,
                        padding: 0,
                        marginRight: '10px',
                        outline: 0,
                        _focus: {
                            boxShadow: 'none',
                        },
                        _selected: {
                            borderBottom: '1px solid #072833'
                        }
                    },
                    tabpanel: {
                        padding: 0
                    }
                }
            }
        },
        Tag: {
          baseStyle: {
              label:  {
                  padding: '4px 10px',
                  fontFamily: 'Montserrat, Roboto Condensed, sans-serif',
                  fontWeight:500,
                  fontSize: '14px'
              },
              container: {
                  border: '1px solid',
                  borderRadius: 0,
                  height: '29px'
              }
          },
          variants: {
              new: {
                  container: {
                      borderRadius: '4px',
                      borderColor: '#170A4A'
                  },
                  label: {
                      color: '#170A4A',

                  }
              },

              confirmed: {
                  container: {
                      borderRadius: 0,
                      borderColor: '#00A372'
                  },
                  label:  {
                      color: '#00A372'
                  },
              },
              pending: {
                  container: {
                      borderRadius: 0,
                      borderColor: '#FFAC02'
                  },
                  label:  {
                      color: '#FFAC02'
                  },
              }
          }
        }
    },
    styles: {
        global: {
            body: {
                bg: 'Grey'
            }
        }
    }
}