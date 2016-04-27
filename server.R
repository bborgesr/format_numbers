library(shiny)

shinyServer(function(input, output, session) {
  #********** Option 1 **********#
  output$numberN1 <- renderText({ input$n1 })
  output$numberN1op <- renderText({ input$n1*2 })
  output$formatN1 <- renderText({ formatC(input$n1, format="d", big.mark=',') })
  
  #********** Option 2 **********#
  n2 <- reactive({ as.numeric(gsub(",", "", input$n2)) })
  output$formatN2 <- renderText({ input$n2 })
  output$numberN2 <- renderText({ n2() })
  output$numberN2op <- renderText({ n2()*2 })
})