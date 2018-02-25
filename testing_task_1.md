# Testing task 1:

## Carry out static testing on the code below.

### Read through code below and comment on any errors you can spot.

#### Don't correct the errors!


```ruby
class CardGame

  def initialize(suit, value)
    @suit = suit
    @value = value;
  end
  # ; shouldnt be there after value

  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end
  # Should be double == sign

  dif highest_card(card1 card2)
  if card1.value > card2.value
    return card.name
  else
    card2
  end
end
end
# typo should be def, one too many ends, return card1.name - missing the 1 - or needs to state which card name to return, Could add a return after the else and state what part of card2 you want to return if card2 is greater

def self.cards_total(cards)
  total
  for card in cards
    total += card.value
    return "You have a total of" + total
  end
end

# need to define total, presumably as an empty array like this: total = [] 

```
