# OFAC Search

OFAC Search is a web application crafted to conduct searches against the OFAC sanctions list. This tool assists organizations in determining whether any entities involved in a transaction are listed on watchlists curated by the Office of Foreign Assets Control (OFAC), a division of the U.S. Department of the Treasury.

## Features

- **Sanctions List Search:** Perform searches based on the provided name, date of birth, and country information.
- **User-friendly Interface:** Simple and intuitive user interface for easy interaction.
- **Result Display:** View the search results, including details such as name, date of birth, and country, indicating whether there is a match.

## Technologies Used

- **React** 
- **Tailwind CSS** 
- **API Integration:** Utilizes an external API to fetch country data and perform searches against the OFAC sanctions list.

## Deployment

The application is deployed and accessible at [OFAC Screening App](https://ofac-screening-app.vercel.app/).

# Usage

## Input Information:

- Enter the required information, including name, date of birth, and country.

## Perform Search:

- Click the "Search" button to initiate the OFAC sanctions list search.

## View Results:

- The application displays the search results, indicating whether there is a match.
- If there is a match, the result status will be displayed as **Hit**.
- If there is no match, the result status will be displayed as **Clear**.
- Details such as name, date of birth, and country are presented.

## Navigate Back:

- Use the "Back" button to return to the input form and perform additional searches.

# Additional Notes

- The application uses the [OFAC API](https://your-ofac-api-url.com) for sanctions list searches.
- For more information on Specially Designated Nationals List, visit [OFAC](https://ofac.treasury.gov/).
