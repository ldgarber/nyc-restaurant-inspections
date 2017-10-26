##!/usr/bin/env ruby

require 'csv'

COLUMNS = [
  'camis', 
  'name', 
  'boro', 
  'building', 
  'street', 
  'zipcode', 
  'phone', 
  'cuisine_description', 
  'inspection_date', 
  'action', 
  'violation_code', 
  'violation_description', 
  'critical_flag', 
  'score', 
  'grade', 
  'grade_date', 
  'record_date', 
  'inspection_type'
]

print "\nSeeding..."

dir = File.dirname(File.expand_path(__FILE__))
lineno = 1
CSV.foreach(File.join(dir, 'raw_inspection_data.csv'), 'r:ISO8859-1') do |row| 
  lineno = $.

  next if lineno == 1
  print '.' if lineno % 1000 == 0

  entry = {}

  COLUMNS.each_with_index do |column, idx| 
    entry[column] = row[idx]
  end

  Restaurant.create!(entry)
  
end
