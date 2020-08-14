package maciag.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import maciag.model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

  boolean existsByUsername(String username);

  @Override
  Optional<User> findById(Integer integer);

  Optional<User> findByUsername(String username);

  @Transactional
  void deleteByUsername(String username);

}
