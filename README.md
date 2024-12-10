# TEXT CLOCK BY NANA AMOAKO
Clone of https://www.clockfaceonline.co.uk/clocks/text/

# Key Improvements:
- Added proper number conversion for minsSecs
- Created a getNextHour helper function to handle special cases
- Reorganized the time conditions to be more logical and prevent double-incrementing
- Separated "to" and "past" cases for clearer logic
- Better handling of midnight/noon edge cases
- Creates a fixed button at the bottom of the screen
- Provides 4 different themes (Dark, Light, Nude, and Cream)
- Cycles through themes when clicking the button
- Maintains proper contrast for text visibility in each theme
- Includes smooth transitions between themes
- Added a new updateLogoForTheme function that switches the logo image source based on theme
- Modified updateButtonStyle to call updateLogoForTheme with appropriate boolean
- Uses the existing theme index check to determine dark vs light themes
- The function will switch to:
  - favicon-na-white.png for dark theme
  - favicon-na-black.png for light, nude, and cream themes  
- Increase the base font size from 17px to 20px
