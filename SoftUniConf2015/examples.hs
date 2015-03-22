import Data.Char

inc x = x + 1

sumList :: [Int] -> Int
sumList [] = 0
sumList (x:xs) = x + sumList xs

fact :: Int -> Int
fact 0 = 1
fact n = n * fact (n - 1)

first :: [a] -> a
first (x:_) = x

member y [] = False
member y (x:xs) = y == x || member y xs

makeName :: String -> String -> String
makeName family first = concat [first, " ", family]

nakovit :: String -> String
nakovit = makeName "Nakov"

map2 :: (a -> b) -> [a] -> [b]
map2 _ [] = []
map2 f (x:xs) = f x : map2 f xs

confIt names = map (\name -> name ++ "Conf") names

trimLeft = dropWhile isSpace

trim = reverse . trimLeft . reverse . trimLeft

trimLines = map trim

