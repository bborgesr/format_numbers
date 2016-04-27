library(shiny)

shinyUI(fluidPage(
  includeScript("format_numbers.js"),
  numericInput('n', 'Enter a number', 5000),
  'The actual value is:',
  textOutput('prettyN', inline = TRUE)
))