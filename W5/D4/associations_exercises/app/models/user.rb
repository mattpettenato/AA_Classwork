class User < ApplicationRecord
  has_many :enrollments,
    class_name: :Enrollment,
    foreign_key: :student_id,
    primary_key: :id

  has_many :enrolled_courses,
    through: :enrollments,
    source: :course

end
