require 'singleton'
require 'sqlite3'
require 'byebug'

class QuestionsDatabase < SQLite3::Database
  include Singleton
  puts __FILE__
  # SQL_FILE = File.join(File.dirname(__FILE__), 'import_db.sql')
  # DB_FILE = File.join(File.dirname(__FILE__), 'questions.db')


  SQL_FILE = './import_db.sql'
  DB_FILE = './questions.db'

  def self.open
    @database = SQLite3::Database.new(DB_FILE)
    # super('questions.db')
    @database.type_translation = true
    @database.results_as_hash = true
  end
  
  def self.instance
    reset! if @database.nil?
    @database
  end

  def self.get_first_row(*bind_vars)
    #debugger
      instance.get_first_row(*bind_vars)
  end

  def self.reset!
    commands = [
      "rm '#{DB_FILE}'", 
      "cat '#{SQL_FILE}' | sqlite3 '#{DB_FILE}'"
    ]
    commands.each do |command|
      '#{command}'
    end
    QuestionsDatabase.open
  end

  def self.execute
  end
end