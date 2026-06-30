Feature: outputs

  Scenario Outline: outputs
    Given I have an output defined
    Then it must contain <output>
    Examples:
    | output |
    | tags   |

  # SRC: https://terraform-compliance.com/pages/Examples/AWS/tags_related.html#ensure-that-specific-tags-are-defined
  Scenario Outline: Ensure that specific tags are defined
    Given I have an output defined
    Then it must contain tags

    # FIXME
    # And it must contain <tags>

    # Examples:
    #   | tags        | value                                          |
    #   | created_by  | ^github-actions-terraform$                     |
    #   | environment | ^(local\|ci-branch\|ci-main\|dev\|prod\|test)$ |
    #   | stack_id    | .+                                             |
