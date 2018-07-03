package models

import "time"

type Trip struct {
  ID                         uint `gorm:"primary_key" json:"id"`
  TripTypeId                 int  `json:"trip_type_id"`
  LocaleId                   string `json:"locale_id"`
  ProjectId                  int `json:"project_id"`
  Code                       string `json:"code"`
  Name                       string `json:"name"`
  EmotionalHeadline          string `json:"emotional_headline"`
  Introduction               string `json:"introduction"`
  HighlightsDescription      string `json:"highlights_description"`
  IncludedServices           string `json:"included_services"`
  ExcludedServices           string `json:"excluded_services"`
  Highlight1                 string `json:"highlight1"`
  Highlight2                 string `json:"highlight2"`
  Highlight3                 string `json:"highlight3"`
  Highlight4                 string `json:"highlight4"`
  Usp1                       string `json:"usp1"`
  Usp2                       string `json:"usp2"`
  Usp3                       string `json:"usp3"`
  Usp4                       string `json:"usp4"`
  VideoUurl                  string `json:"video_url"`
  DefaultMaxNnoOfPax         int `json:"default_max_no_of_pax"`
  CachedNumberOfTrip_days    int `json:"cached_number_of_trip_days"`
  CachedMargin               int64 `json:"cached_margin"`
  CachedAmountOfFeedback     int64 `json:"cached_amount_of_feedback"`
  CachedAverageEvaluation    float32 `json:"cached_average_evaluation"`
  CreatedAt                  *time.Time `json:"createdAt"`
  UpdatedAt                  *time.Time `json:"updatedAt"`
}
