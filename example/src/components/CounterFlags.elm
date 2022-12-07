module CounterFlags exposing (main)

import Browser
import Html as Html
import Html.Events as HtmlEvents
import Json.Decode as Decode


main : Program Decode.Value Model Msg
main =
    Browser.element
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Sub.none
        }


type alias Model =
    Int


type Msg
    = Increment
    | Decrement


init : Decode.Value -> ( Model, Cmd Msg )
init flags =
    let
        initialCount =
            Decode.decodeValue decodeFlags flags
                |> Result.withDefault 0
    in
    ( initialCount, Cmd.none )


decodeFlags : Decode.Decoder Model
decodeFlags =
    Decode.field "count" Decode.int


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increment ->
            ( model + 1, Cmd.none )

        Decrement ->
            ( model - 1, Cmd.none )


view : Model -> Html.Html Msg
view model =
    Html.div []
        [ Html.button [ HtmlEvents.onClick Decrement ] [ Html.text "-" ]
        , Html.text (String.fromInt model)
        , Html.button [ HtmlEvents.onClick Increment ] [ Html.text "+" ]
        ]
