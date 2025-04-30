Feature: Validating fields and displaying results

    Scenario: Fields filled in correctly
        Given I am on the main page
        When I enter "70" in the weight field
        And I click one of the the options (Não pratico nenhum tipo de exercícios físicos; Pratico apenas exercícios aeróbicos; Pratico apenas exercícios de força (musculação); Pratico exercícios aeróbicos e exercícios de força) of the lifestyle field
        And I click the calculate button
        Then I should see the result (number) in the carbohydrate field
        And I should see the result (number) in the protein field
        And I should see the result (number) in the lipid field

    Scenario: Invalid weight field
        Given I am on the main page
        When I don't enter anything in the weight field
        And I click one of the the options (Não pratico nenhum tipo de exercícios físicos; Pratico apenas exercícios aeróbicos; Pratico apenas exercícios de força (musculação); Pratico exercícios aeróbicos e exercícios de força) of the lifestyle field
        And I click the calculate button
        Then I should see the "Insira seu peso" message in the alert

    Scenario: Invalid lifestyle field
        Given I am on the main page
        When I enter "70" in the peso field 
        And I don't click in one of the options (Não pratico nenhum tipo de exercícios físicos; Pratico apenas exercícios aeróbicos; Pratico apenas exercícios de força (musculação); Pratico exercícios aeróbicos e exercícios de força) of the lifestyle field
        And I click in the calculate button 
        Then I should see the "Escolha um estilo de vida" message in the alert