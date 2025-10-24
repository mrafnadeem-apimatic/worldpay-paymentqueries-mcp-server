
# Number

An object that contains information about the card number.

*This model accepts additional fields of type unknown.*

## Structure

`Number`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardBin` | `string \| undefined` | Optional | The card BIN (Bank Identification Number) is the first 6 or 8 digits of the card number, and can be used to identify the card issuer, the card brand(s) (eg Visa, Cartes Bancaires), and the country. Card BINs are used to route transactions, check card capabilities, and in fraud assessments.<br><br>**Constraints**: *Pattern*: `^[0-9*]+$` |
| `last4Digits` | `string \| undefined` | Optional | The last four digits of the card. Some characters may be obfuscated with a `*` if the PAN length is less than 16 characters.<br><br>**Constraints**: *Pattern*: `^[0-9*]+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "cardBin": "444433",
  "last4Digits": "1111",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

