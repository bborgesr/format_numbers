library(shiny)

shinyServer(function(input, output, session) {
  output$prettyN <- renderText({ input$n })
  output$prettyFoo <- renderText({ input$foo })
})