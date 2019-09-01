import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';
import { Flex, Box, Text } from 'rebass';

export default ({ decks }) => {
  return (
    <div
      sx={{
        fontFamily: 'ui',
        fontWeight: 'bold',
        px: 4,
        py: 3,
      }}
    >
      <Text fontSize={[3, 4, 5]} fontWeight="bold">
        Captain Automation
      </Text>
      <Flex>
        {decks.map(d => (
          <Box
            key={d.id}
            sx={{
              my: 2,
            }}
          >
            <Link
              to={d.slug}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                ':hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              {d.title || d.slug}
            </Link>
          </Box>
        ))}
      </Flex>
    </div>
  );
};
