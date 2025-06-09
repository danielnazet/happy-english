# Happy English - Aplikacja dla Nauczycieli Języka Angielskiego

## Opis Projektu

Happy English to aplikacja mobilna dla nauczycieli języka angielskiego, umożliwiająca zarządzanie lekcjami, zadaniami domowymi, feedbackiem i nieobecnościami uczniów.

## Funkcjonalności Zaimplementowane

-   ✅ System autoryzacji z kontem testowym nauczyciela
-   ✅ Dashboard z nadchodzącymi lekcjami
-   ✅ System zgłaszania nieobecności
-   ✅ Zakładki nawigacyjne (Home, Homework, Feedback, Profile)
-   ✅ Responsywny interfejs użytkownika

## Konto Testowe

```
Email: teacher@test.com
Hasło: teacher123
```

## Struktura Projektu

```
app/
├── _layout.js              # Główny layout aplikacji
├── constants/
│   └── auth.js            # Dane testowe i walidacja logowania
├── context/
│   └── auth.js            # Kontekst autoryzacji
├── (auth)/
│   ├── _layout.js         # Layout grupy autoryzacji
│   └── login.js           # Ekran logowania
└── (tabs)/
    ├── _layout.js         # Layout zakładek
    ├── dashboard.js       # Ekran główny
    ├── homework.js        # Zarządzanie zadaniami
    ├── feedback.js        # Opinie nauczyciela
    ├── profile.js         # Profil użytkownika
    └── absence.js         # Zgłaszanie nieobecności
```

## Technologie

-   React Native
-   Expo
-   Expo Router
-   React Navigation
-   Expo Vector Icons

## Do Zrobienia

### Priorytet Wysoki

-   [ ] Implementacja systemu zarządzania zadaniami domowymi
-   [ ] System oceniania i feedbacku dla uczniów
-   [ ] Profil nauczyciela z możliwością edycji danych
-   [ ] System powiadomień o nowych zadaniach/feedbacku

### Priorytet Średni

-   [ ] Kalendarz lekcji
-   [ ] Statystyki postępów uczniów
-   [ ] System wiadomości między nauczycielem a rodzicami
-   [ ] Eksport danych do PDF/Excel

### Priorytet Niski

-   [ ] Tryb ciemny
-   [ ] Wsparcie dla wielu języków
-   [ ] System backupu danych
-   [ ] Integracja z kalendarzem systemowym

## Jak Uruchomić Projekt

1. Sklonuj repozytorium
2. Zainstaluj zależności:
    ```bash
    npm install
    ```
3. Uruchom aplikację:
    ```bash
    npm start
    ```
4. Użyj Expo Go na urządzeniu mobilnym lub emulatorze

## Planowane Zmiany

1. Dodanie systemu zarządzania zadaniami:

    - Tworzenie nowych zadań
    - Przypisywanie zadań do klas/grup
    - Śledzenie terminów oddania
    - Ocenianie zadań

2. Rozbudowa systemu feedbacku:

    - Szablony opinii
    - Historia feedbacku
    - Powiadomienia o nowych opiniach

3. Ulepszenie profilu nauczyciela:

    - Edycja danych osobowych
    - Zarządzanie przedmiotami
    - Statystyki aktywności

4. Optymalizacja UI/UX:
    - Dodanie animacji
    - Ulepszenie responsywności
    - Dodanie wskaźników ładowania

## Kontrybucja

1. Fork repozytorium
2. Stwórz branch dla nowej funkcjonalności
3. Commit zmian
4. Push do brancha
5. Stwórz Pull Request

## Licencja

MIT License
