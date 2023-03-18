Feature: ingestApi

  Scenario Outline: Verify getAbi functionality
    Given A request with contractAddress <request>
    When POST API call is made to /contracts/get-abi
    Then I get response code 200

    Examples:
      | request |
      | {"address": "0xed5af388653567af2f388e6224dc7c4b3241c544"} |