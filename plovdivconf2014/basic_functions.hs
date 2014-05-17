f x = x * x

inInterval :: Int -> Int -> Int -> Bool
inInterval a b x = x >= a && x <= b

confIt :: [String] -> [String]
confIt cities = map (\city -> city ++ "Conf") cities

first :: [a] -> a
first [] = error "Empty list"
first (x:xs) = x

inList :: Eq a => a -> [a] -> Bool
inList needle [] = False
inList needle (x:xs)
  | needle == x = True
  | otherwise = inList needle xs
